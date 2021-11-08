import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { HotelsModule } from './hotels/hotels.module';
import { HotelEntity } from './hotels/entities/hotel.entity';
import { ReservationEntity } from './reservations/entities/reservation.entity';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { RoomEntity } from './rooms/entities/room.entity';
import { ClientsModule } from './clients/clients.module';
import { PaymentsModule } from './payments/payments.module';
import { PaymentEntity } from './payments/entities/payment.entity';
import { ClientEntity } from './clients/entities/client.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_URL,
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'aipsdb',
      entities: [
        HotelEntity,
        ReservationEntity,
        RoomEntity,
        PaymentEntity,
        ClientEntity,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ReservationsModule,
    HotelsModule,
    RoomsModule,
    ClientsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
