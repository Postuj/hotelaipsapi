import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('/allcities')
  findAllCities() {
    return this.hotelsService.findAllCities();
  }

  @Get(':city')
  findAllInCity(@Param('city') city: string) {
    return this.hotelsService.findAllInCity(city);
  }
}
