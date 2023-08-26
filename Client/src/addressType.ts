export default interface Address {
  fullName: string;
  phoneNumber: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
