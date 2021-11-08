import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HotelEntity {
  // Primary
  @PrimaryGeneratedColumn()
  hotelId: number;
  // Data
  @Column()
  name: string;
  @Column()
  city: string;
  @Column()
  address: string;
  @Column({type: 'float'})
  rating: number;
}
