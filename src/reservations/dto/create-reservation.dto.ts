export class CreateReservationDto {
    email: string;
    name: string;
    surname: string;
    roomId: number;
    paymentId: number;
    startDate: Date;
    endDate: Date;
}
