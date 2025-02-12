import { PartnerDTO } from "../DTOs/partnerDTO.js";
import { partnerRepository } from "../repositories/partner-repo.js";

export const createPartnerController = async (req, res) => {
  try {
    const partnerDTO = new PartnerDTO(req.body);
    const partner = await partnerRepository.createPartner(partnerDTO);
    res.status(201).json({
      status: "success",
      data: partner,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getAllPartnersController = async (req, res) => {
  try {
    const partners = await partnerRepository.getAllPartners();
    res.status(200).json({
      status: "success",
      data: partners,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getPartnerController = async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await partnerRepository.getPartner(parseInt(id));
    if (!partner) {
      return res.status(404).json({
        status: "error",
        message: "Partner not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: partner,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updatePartnerStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const partner = await partnerRepository.updatePartnerStatus(
      parseInt(id),
      status
    );
    res.status(200).json({
      status: "success",
      data: partner,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deletePartnerController = async (req, res) => {
  try {
    const { id } = req.params;
    await partnerRepository.deletePartner(parseInt(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
