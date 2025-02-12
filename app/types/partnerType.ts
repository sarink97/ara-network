// types.ts
export type InterestedProducts = {
  siem: boolean;
  managedSecurity: boolean;
  logManagement: boolean;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  website: string;
  interestedProducts: InterestedProducts;
  message: string;
};
