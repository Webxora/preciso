import { client } from "../client";

type BookingData = {
  name: string;
  email: string;
  schedule: Date;
  message?: string | undefined;
};

export const getAllActiveBookings = async () => {
    const { data } = await client.get('/bookings/active');
    return data
};

export const createBooking = async (newBooking: BookingData) => {
    const { data } = await client.post('/bookings/create', newBooking);
    return data
};