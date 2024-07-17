import { PayPalButtons } from '@paypal/react-paypal-js';
import { useCartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useOrderContext } from './OrderContext';
import { useUserContext } from './UserContext';

export default function PayPalPayment() {
  const { cartArray, setCartArray, totalPrice } = useCartContext();
  const { currentUser } = useUserContext();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  const navigate = useNavigate();
  const {
    setOrderNumber,
    setOrderTotal,
    setOrderDate,
    setPaymentMethod,
    setOrderEmail,
    setExpectedDelivery,
    setDeliveryOptions,
  } = useOrderContext();

  const createOrder = (data: any) => {
    return fetch(`${backendUrl}paypalPaymentTest/create-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        product: cartArray,
        totalPrice: totalPrice,
      }),
    })
      .then(response => response.json())
      .then(order => {
        return order.id;
      });
  };

  const onApprove = (data: any) => {
    return fetch(`${backendUrl}paypalPaymentTest/capture-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
        cart: cartArray.map(item => ({
          productId: item.productId,
          productName: item.productName,
          productPrice: item.productPrice,
          productQuantity: item.productQuantity,
        })),
        totalPrice: totalPrice,
        fbId: currentUser.fbId || '',
      }),
    })
      .then(response => response.json())
      .then(data => {
        setOrderNumber(data.orderNumber);
        setOrderDate(data.orderDate);
        setPaymentMethod(data.paymentMethod);
        setOrderEmail(data.emailAddress);
        setExpectedDelivery(data.expectedDelivery);
        setDeliveryOptions(data.deliveryOptions);
        setOrderTotal(`${'\u20AC'}${data.totalPrice}`);
        setCartArray([]);
        navigate('/success');
      })
      .catch(err => console.log(err));
  };

  return (
    <PayPalButtons
      disabled={cartArray.length === 0}
      fundingSource="paypal"
      createOrder={data => createOrder(data)}
      onApprove={data => onApprove(data)}
    />
  );
}
