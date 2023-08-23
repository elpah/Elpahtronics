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

export { getDate, generateOrderNumber };
