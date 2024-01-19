# **ELPAHTRONICS**
An E-Commerce web application that demonstrates the online shopping process.

## Preview
https://github.com/elpah/ReactCalculator/assets/81959047/b2c4b39a-3abf-4637-a65f-c128f5207712

## Technologies

This project is built with 
- React and typescript for the frontend, and utilizes styled-component for styling.
- MongoDB for products, orders and user storage
- NodeJS, Express for the backend

### Dependencies

**Client:**
- [Firebase](https://firebase.google.com/) for for simple email and password authentication
- [PayPal](https://developer.paypal.com/) for payment processing.
- [Stripe](https://stripe.com/docs/development) for payment processing

**Server:**
- [MongoDB](https://www.mongodb.com/cloud/atlas/register) for the database to store products, users, and orders.
- [Mailjet](https://www.mailjet.com/) for sending order confirmations and feedback confirmations to users.

## Features

- Sign up
- Sign in
- Add to cart
- Delete from cart
- Clear cart
- Increase product quantity in cart
- Make a payment through PayPal or Proceed to checkout and pay with visa card
- Make a payment through Visa Card
- Send a confirmation email with order details when payment is successful.
- Send confirmation email when feedback is submitted

### Home Page

![Home Page](https://github.com/elpah/elpah/blob/main/mockups/homepage-1.png?raw=true)
![Home Page](https://github.com/elpah/elpah/blob/main/mockups/homepage-2.png?raw=true)

### Product Page

![Product Page](https://github.com/elpah/elpah/blob/main/mockups/product-1.png?raw=true)
![Product Page](https://github.com/elpah/elpah/blob/main/mockups/product-2.png?raw=true)

### Contact

![Contact](https://github.com/elpah/elpah/blob/main/mockups/contact-1.png?raw=true)
![Contact](https://github.com/elpah/elpah/blob/main/mockups/contact-2.png?raw=true)

### Cart

![Cart](https://github.com/elpah/elpah/blob/main/mockups/cart-1.png?raw=true)

### Checkout

![Checkout](https://github.com/elpah/elpah/blob/main/mockups/checkout-1.png?raw=true)
![Checkout](https://github.com/elpah/elpah/blob/main/mockups/checkout-2.png?raw=true)

### Find Order

![Find Order](https://github.com/elpah/elpah/blob/main/mockups/findorder.png?raw=true)

### Login

![Login](https://github.com/elpah/elpah/blob/main/mockups/login.png?raw=true)

### Signup
![Signup](https://github.com/elpah/elpah/blob/main/mockups/signup.png?raw=true)

### Userpage

![Userpage](https://github.com/elpah/elpah/blob/main/mockups/userprofile-1.png?raw=true)

### User Orders
![Userpage](https://github.com/elpah/elpah/blob/main/mockups/userprofile-2.png?raw=true)


## Setup

### Backend

1. Open a new terminal
2. Move to the `Server` directory

   ```console
   cd server

3. Rename .env.example to .env and add your details for the MongoDB connection string, database name, mailjet, and stripe keys

   ```console
   mv .env.example .env
   
   
4. Run the commands
   ```console
   npm install && npm start



### Client
1. Open a new terminal
2. Move to the `Client` directory

   ```console
   cd Client

      
3. Run the commands
   ```console
   npm install && npm start



