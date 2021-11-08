export interface Room {
    // Primary
    roomId?: number;
    // Foreign
    hotelId?: number;
    // Data
    size?: number;
    price?: number;
    description?: string;
}