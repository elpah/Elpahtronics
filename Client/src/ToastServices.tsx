import { useToasts, Options as ToastOptions } from 'react-toast-notifications';
import styled from 'styled-components';

interface ShowToastOptions extends ToastOptions {
  autoDismissTimeout?: number;
}
const StyledToast = styled.div`
  padding: 16px;
  border-radius: 8px;
  font-size: 1.2em;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  :global(.react-toast-notifications__toast__icon-wrapper) {
    display: none; /* Hide the icon wrapper */
  }
`;

export const ToastServices = () => {
  const { addToast } = useToasts();

  const showToast = (message: string, autoDismissTimeout: number, options: ShowToastOptions): void => {
    addToast(<StyledToast> {message}</StyledToast>, {
      ...options,
      autoDismissTimeout,
    });
  };

  return { showToast };
};

export const useCustomToast = () => {
  return ToastServices();
};
