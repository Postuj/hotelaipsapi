import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientEntity {
    // Primary
    @PrimaryGeneratedColumn() // Primary key
    clientId: number
    // Data
    @Column()
    email: string;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    password: string;
}