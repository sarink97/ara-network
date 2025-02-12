import prisma from "../database.js";

export const partnerRepository = {
  createPartner: async (partnerDTO) => {
    return await prisma.partner.create({
      data: {
        name: partnerDTO.name,
        email: partnerDTO.email,
        phone: partnerDTO.phone,
        hearAboutUs: partnerDTO.hearAboutUs,
        companyName: partnerDTO.companyName,
        addressLine1: partnerDTO.addressLine1,
        addressLine2: partnerDTO.addressLine2,
        city: partnerDTO.city,
        state: partnerDTO.state,
        postalCode: partnerDTO.postalCode,
        country: partnerDTO.country,
        website: partnerDTO.website,
        interestedProducts: partnerDTO.interestedProducts,
        message: partnerDTO.message,
        status: "PENDING", // Default status
      },
    });
  },

  getAllPartners: async () => {
    return await prisma.partner.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  getPartner: async (id) => {
    return await prisma.partner.findUnique({
      where: { id },
    });
  },

  updatePartnerStatus: async (id, status) => {
    return await prisma.partner.update({
      where: { id },
      data: { status },
    });
  },

  deletePartner: async (id) => {
    return await prisma.partner.delete({
      where: { id },
    });
  },
};
