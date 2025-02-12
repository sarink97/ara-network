export class SellerDTO {
  constructor(data) {
    if (!data.name) throw new Error("Seller name is required");
    if (!data.country) throw new Error("Country is required");
    if (!Array.isArray(data.phones) || data.phones.length === 0)
      throw new Error("At least one phone number is required");

    this.name = data.name;
    this.country = data.country;
    this.email = data.email || null;
    this.address = data.address || null;
    this.company = data.company || null;
    this.phones = data.phones; // List of phone numbers
  }
}
