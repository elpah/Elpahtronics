const { CLIENT_ID, APP_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

//import types later
/**
 * Create an order
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */

const handleResponse = async (response: Response) => {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
};

const createOrder = async (data: any) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: data.totalPrice,
          },
        },
      ],
    }),
  });

  return handleResponse(response);
};

/**
 * Capture payment for an order
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const capturePayment = async (orderId: string) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

/**
 * Generate an OAuth 2.0 access token
 * @see https://developer.paypal.com/api/rest/authentication/
 */
const generateAccessToken = async () => {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const jsonData = await handleResponse(response);
  return jsonData.access_token;
};

export { createOrder, capturePayment, generateAccessToken, handleResponse };
