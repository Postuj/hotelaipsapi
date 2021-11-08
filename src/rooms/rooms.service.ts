import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from 'src/hotels/entities/hotel.entity';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomsRepository: Repository<RoomEntity>,
  ) {}

  getHotelRooms(hotelId: string) {
    return this.roomsRepository
      .createQueryBuilder('r')
      .innerJoinAndSelect(HotelEntity, 'h', 'h.hotelId = r.hotelId')
      .select(['r.roomId', 'r.price'])
      .andWhere('h.hotelId = :hotelId', { hotelId })
      .getRawMany();
  }
}
