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
async function sendEmail(email: string, orderNumber: string) {
  const mailjetClient = mailjet.connect(
    "df92719b746ff069f82809f61a4b6c61",
    "770bb486a9f9e86a695711bbd1c80151"
  );

  if (!email) {
    return "Email not found";
  }

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
        Subject: "Order Confirmation...",
        HTMLPart: `
            <html>
              <head>
                <style>
                  /* Add styles later */
                  body {
                    font-family: Arial, sans-serif;
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
                    <p>Your order details:</p>
                    <ul>
                      <!-- Add your order details here -->
                    </ul>
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
