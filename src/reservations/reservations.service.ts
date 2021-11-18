import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsService } from 'src/clients/clients.service';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationEntity } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationsRepository: Repository<ReservationEntity>,
    private readonly clientsService: ClientsService,
  ) {}

  async create(createReservationDto: CreateReservationDto) {
    let client = await this.clientsService.findOneByEmail(
      createReservationDto.email,
    );
    if (!client) {
      const newClient = await this.clientsService.create({
        email: createReservationDto.email,
        name: createReservationDto.name,
        surname: createReservationDto.surname,
      });
      client = newClient;
    }
    const newReservation = this.reservationsRepository.create({
      roomId: createReservationDto.roomId,
      clientId: client.clientId,
      paymentId: createReservationDto.paymentId,
      startDate: createReservationDto.startDate,
      endDate: createReservationDto.endDate,
    });
    return this.reservationsRepository.save(newReservation);
  }

}
