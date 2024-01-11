import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import reportWebVitals from './reportWebVitals';
import App from './App.tsx';
import { CartContextProvider } from './components/CartContext.tsx';
import { OrderContextProvider } from './components/OrderContext.tsx';
import { ShippingAddressContextProvider } from './components/ShippingAddressContext.tsx';
import GlobalStyles from './components/GlobalStyles.tsx';
import { UserContextProvider } from './components/UserContext.tsx';
import { ToastProvider } from 'react-toast-notifications';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const toastOptions = {
  placement: 'bottom-left',
  modifiers: [
    (appearance: any, options: any) => ({
      big: options.autoDismiss,
    }),
  ],
};
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <OrderContextProvider>
          <CartContextProvider>
            <ShippingAddressContextProvider>
              <UserContextProvider>
                <GlobalStyles />
                <ToastProvider placement="bottom-left">
                  <App />
                </ToastProvider>
              </UserContextProvider>
            </ShippingAddressContextProvider>
          </CartContextProvider>
        </OrderContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
