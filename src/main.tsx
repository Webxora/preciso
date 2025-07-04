import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "react-query";
import { BookingsProvider } from './context/bookings-context.tsx';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookingsProvider>
        <App />
      </BookingsProvider>
    </QueryClientProvider>
  </StrictMode>,
)
