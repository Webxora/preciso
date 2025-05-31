import { getAllActiveBookings } from "@/api/v1/bookings";
import type { BookingData } from "@/types/BookingData";
import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";

type BookingsContextType = {
    bookings: BookingData[] | undefined;
    isLoading: boolean;
    error: unknown;
    refetch: () => void;
};

const BookingsContext = createContext<BookingsContextType | undefined>(undefined);

export const BookingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data, isLoading, error, refetch } = useQuery<BookingData[]>({
        queryKey: ["booking-form"],
        queryFn: () => getAllActiveBookings(),
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 60 * 24,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: 1,
    });

    return (
        <BookingsContext.Provider value={{ bookings: data, isLoading, error, refetch }}>
            {children}
        </BookingsContext.Provider>
    );
};

// Custom hook for consuming the context
export const useBookings = () => {
    const context = useContext(BookingsContext);
    if (!context) {
        throw new Error("useBookings must be used within a BookingsProvider");
    }
    return context;
};
