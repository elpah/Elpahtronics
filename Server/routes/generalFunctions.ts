import "dotenv/config";
import mailjet from "node-mailjet";

function generateOrderNumber(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let orderNumber = "";
  orderNumber += "44";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    orderNumber += letters.charAt(randomIndex);
  }
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    orderNumber += numbers.charAt(randomIndex);
  }
  const randomIndex = Math.floor(Math.random() * letters.length);
  orderNumber += letters.charAt(randomIndex);
  return orderNumber;
}

function getDate() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let deliveryDate = new Date(year, month - 1, day + 10);
  let deliveryYear = deliveryDate.getFullYear();
  let deliveryMonth = deliveryDate.getMonth() + 1;
  let deliveryDay = deliveryDate.getDate();

  return {
    orderDate: `${day}-${month}-${year}`,
    expectedDelivery: `${deliveryDay}-${deliveryMonth}-${deliveryYear}`,
  };
}

async function sendEmail(
  email: string,
  orderNumber: string,
  cart: {
    productId: string;
    productName: string;
    productPrice: string;
    productQuantity: number;
  }[],
  totalPrice: string
) {
  const mailjetClient = mailjet.connect(
    process.env.MAIL_JET_PK as string,
    process.env.MAIL_JET_SK as string
  );

  if (!email) {
    return "Email not found";
  }

  const cartItems = cart
    .map(
      (item) =>
        `<li>${item.productName} (Qty: ${item.productQuantity}) - $${parseFloat(
          item.productPrice
        ).toFixed(2)}</li>`
    )
    .join("");

  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "elpachris.obeng@appliedtechnology.se",
          Name: "Elpahtronics",
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: "Order Confirmation",
        HTMLPart: `
              <html>
                <head>
                  <style>
                    body {
                    //   font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 0;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ccc;
                      background-color: #f9f9f9;
                    }
                    .header {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                    .message {
                      font-size: 18px;
                      margin-bottom: 20px;
                    }
                    .order-details {
                      margin-top: 20px;
                      padding: 10px;
                      border: 1px solid #ccc;
                      background-color: #fff;
                    }
                    .footer {
                      text-align: center;
                      margin-top: 20px;
                      padding-top: 10px;
                      border-top: 1px solid #ccc;
                    }
                    .link {
                      color: #007bff;
                      text-decoration: none;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1>Order Confirmation</h1>
                    </div>
                    <div class="message">
                      <p>Thank you for your order from Elpahtronics!</p>
                      <p>We are processing your order and will update you with the tracking information.</p>
                      <div class="order-details">
                        <p>Your order details:</p>
                        <ul>
                          ${cartItems}
                        </ul>
                        <p>Total Price: $${totalPrice}</p>
                        <p>Order Number: ${orderNumber}</p>
                      </div>
                    </div>
                    <div class="footer">
                      <p>If you have any questions, please <a class="link" href="#">contact us</a>.</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
        CustomID: "Elpahtronics",
      },
    ],
  });

  try {
    const result = await request;
    console.log("Email sent successfully");
    return "Email sent successfully";
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { getDate, generateOrderNumber, sendEmail };
