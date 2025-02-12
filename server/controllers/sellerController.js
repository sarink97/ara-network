import SellerService from "../repositories/seller-repo.js";

// Create a Seller
// ✅ Create a new Seller (With Phones)
export const createSellerController = async (req, res) => {
  try {
    const { name, country, email, address, company, phones } = req.body;

    if (!name || !country || !Array.isArray(phones) || phones.length === 0) {
      return res.status(400).json({ error: "Phone numbers are required" });
    }

    const seller = await SellerService.create({
      name,
      country,
      email,
      address,
      company,
      phones,
    });
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ error: `Error creating seller: ${error.message}` });
  }
};

// Get all Sellers
export const getAllSellersController = async (req, res) => {
  try {
    const sellers = await SellerService.findAll();
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: `Error fetching sellers: ${error.message}` });
  }
};

// Get a single Seller by ID
export const getSellerController = async (req, res) => {
  try {
    const seller = await SellerService.findOne(req.params.id);
    if (!seller) return res.status(404).json({ error: "Seller not found" });
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: `Error finding seller: ${error.message}` });
  }
};

// Update Seller by ID
export const updateSellerController = async (req, res) => {
  try {
    const updatedSeller = await SellerService.update(req.params.id, req.body);
    res.json(updatedSeller);
  } catch (error) {
    res.status(500).json({ error: `Error updating seller: ${error.message}` });
  }
};

// Delete a Seller by ID
export const deleteSellerController = async (req, res) => {
  try {
    await SellerService.delete(req.params.id);
    res.json({ message: "Seller deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Error deleting seller: ${error.message}` });
  }
};
