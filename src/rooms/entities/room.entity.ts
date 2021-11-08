import { HotelEntity } from 'src/hotels/entities/hotel.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RoomEntity {
  // Primary
  @PrimaryGeneratedColumn()
  roomId: number;
  // Foreign
  @ManyToOne(() => HotelEntity, { nullable: false })
  @JoinColumn({ name: 'hotelId' })
  hotelId: number;
  // Data
  @Column()
  size: number;
  @Column({type: 'float'})
  price: number;
  @Column({type: 'text', nullable: true })
  description: string;
}
