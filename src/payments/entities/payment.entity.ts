import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PaymentEntity {
    // Primary
    @PrimaryGeneratedColumn()
    paymentId: number;

    @Column()
    type: string;
}