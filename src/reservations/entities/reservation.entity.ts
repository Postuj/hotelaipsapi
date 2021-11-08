import { ClientEntity } from 'src/clients/entities/client.entity';
import { PaymentEntity } from 'src/payments/entities/payment.entity';
import { RoomEntity } from 'src/rooms/entities/room.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReservationEntity {
  // Primary
  @PrimaryGeneratedColumn()
  reservationId: number;
  // Foreign
  @ManyToOne(() => RoomEntity, { nullable: false })
  @JoinColumn({ name: 'roomId' })
  roomId: number;
  @ManyToOne(() => ClientEntity, { nullable: false })
  @JoinColumn({ name: 'clientId' })
  clientId: number;
  @ManyToOne(() => PaymentEntity, { nullable: false })
  @JoinColumn({ name: 'paymentId' })
  paymentId: number;

  // Data
  @Column({ default: 'pending' })
  status: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
}
