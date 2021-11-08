import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('/hotel/:id')
  getHotelRooms(@Param('id') hotelId: string) {
    return this.roomsService.getHotelRooms(hotelId);
  }
}
