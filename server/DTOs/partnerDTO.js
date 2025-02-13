export class PartnerDTO {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.hearAboutUs = data.hearAboutUs;
    this.companyName = data.companyName;
    this.addressLine1 = data.addressLine1;
    this.addressLine2 = data.addressLine2;
    this.city = data.city;
    this.state = data.state;
    this.postalCode = data.postalCode;
    this.country = data.country;
    this.website = data.website;
    this.interestedProducts = data.interestedProducts;
    this.message = data.message;
  }
}
