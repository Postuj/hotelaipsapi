export interface Reservation {
  reservationId?: number;
  // Foreign
  hotelId?: number;
  clientId?: number;
  paymentId?: number;

  // Data
  status?: string;
  startDate?: Date;
  endDate?: Date;
}
