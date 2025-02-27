// src/seller/seller.service.js
import prisma from "../database.js";

class SellerService {
  async create(data) {
    const { name, country, email, address, company, phones, region } = data; // Add region here

    return await prisma.seller.create({
      data: {
        name,
        country,
        email,
        address,
        company,
        region, // Include region in the create data
        phones: {
          create: phones.map((phone) => ({ number: phone })),
        },
      },
      include: { phones: true },
    });
  }

  async findAll() {
    return await prisma.seller.findMany({
      include: { phones: true }, // ✅ Show phone numbers
    });
  }

  async findOne(id) {
    return await prisma.seller.findUnique({
      where: { id: Number(id) },
      include: { phones: true }, // ✅ Show phone numbers
    });
  }
}

export default new SellerService();
