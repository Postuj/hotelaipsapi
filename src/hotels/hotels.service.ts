import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { distinct, from, Observable } from 'rxjs';
import { RoomEntity } from 'src/rooms/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { HotelEntity } from './entities/hotel.entity';
import { Hotel } from './entities/hotel.interface';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(HotelEntity)
    private readonly hotelRepository: Repository<HotelEntity>,
  ) {}

  findAll(): Observable<Hotel[]> {
    return from(this.hotelRepository.find());
  }

  async findAllInCity(city: string) {
    const hotels = await this.hotelRepository
      .createQueryBuilder('h')
      .innerJoinAndSelect(RoomEntity, 'r', 'h.hotelId = r.hotelId')
      .select([
        'h.hotelId',
        'h.name',
        'h.address',
        'h.city',
        'h.rating',
        'MIN(r.price) as minPrice',
        'MAX(r.price) as maxPrice',
      ])
      .andWhere('h.city = :city', { city })
      .addGroupBy('h.hotelId')
      .addOrderBy('minPrice', 'ASC')
      .getRawMany();
    return hotels;
  }

  async findAllCities() {
    const cities = await this.hotelRepository
      .createQueryBuilder('hotel')
      .select('hotel.city')
      .distinct(true)
      .getRawMany();
    return cities.map((city) => city.hotel_city);
  }

}
