"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Turnstile } from "@marsidev/react-turnstile";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiClient } from "@/lib/api";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import _ from "lodash";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { env } from "node:process";
const initialFormState = {
  name: "",
  email: "",
  phone: "",
  hearAboutUs: "Online Search",
  companyName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  website: "",
  interestedProducts: {
    siem: false,
    managedSecurity: false,
    logManagement: false,
  },
  message: "",
};

interface Phone {
  id: number;
  number: string;
  sellerId: number;
}

// Seller Interface
interface Seller {
  id: number;
  name: string;
  country: string;
  email?: string; // Optional, in case some sellers don't have emails
  address?: string; // Optional
  company?: string;
  region: string; // Optional
  phones: Phone[]; // Array of phone numbers
}
const PartnerPage = () => {
  const [contactUs, setContacUs] = useState<true | false>(false);
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false);
  const [sellersData, setSellersData] = useState<Seller[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  // Add this function to check form validity
  const checkFormValidity = () => {
    const requiredFields = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      website: formData.website,
    };

    const isValid = Object.values(requiredFields).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  };
  const { data: sellers, isLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const response = await apiClient.get("/seller/");
        setSellersData(sellers);
        console.log("Fetched Sellers:", response.data);
        return response.data; // Make sure response.data is an array
      } catch (error) {
        console.error("Error fetching sellers:", error);
        throw error; // Ensure error is caught in `isError`
      }
    },
  });

  useEffect(() => {
    if (sellers) {
      console.log(sellers);
    }
  }, [sellers]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interestedProducts: {
          ...prev.interestedProducts,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Check required fields after each change
    checkFormValidity();
  };

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async () => {
      const response = await apiClient.post(
        "/api/emailPartner/send-partnerEmail",
        formData
      );
      return response;
    },
    onSuccess: () => {
      setFormData(initialFormState);
      setOpen(false);
      setAlert({
        type: "success",
        message: "Partner application submitted successfully!",
      });
      setTimeout(() => setAlert(null), 5000); // Hide alert after 5 seconds
    },
    onError: (error: any) => {
      console.error("Error submitting partner application:", error);
      if (
        error.response?.data?.message?.includes("email is already registered")
      ) {
        setAlert({
          type: "error",
          message: "This email is already registered as a partner.",
        });
      } else {
        setAlert({
          type: "error",
          message: "Failed to submit partner application. Please try again.",
        });
      }
      setTimeout(() => setAlert(null), 5000); // Hide alert after 5 seconds
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isVerified) {
      setAlert({
        type: "error",
        message: "Please complete the captcha verification first.",
      });
      return; // Stop form submission if captcha isn't verified
    }
    try {
      mutate();
      console.log(formData);
      setIsVerified(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (country === "") {
      setContacUs(false);
    } else {
      setContacUs(true);
    }
  }, [country]);

  return (
    <div className="w-full">
      {/* Alert Component */}
      <AnimatePresence mode="wait">
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 z-[9999] ${
              alert.type === "success"
                ? "bg-green-500"
                : alert.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          >
            {alert.type === "success" && (
              <CheckCircle className="w-5 h-5 text-white" />
            )}
            {alert.type === "error" && (
              <XCircle className="w-5 h-5 text-white" />
            )}
            {alert.type === "info" && (
              <AlertCircle className="w-5 h-5 text-white" />
            )}
            <p className="text-white font-medium">{alert.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
            >
              Partners
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6 py-6 px-10">
              Join our global network of innovators and market leaders
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're here to help you achieve your business goals. Get in touch
              with us today.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Partner Section with Contact Modal */}
        <div>
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Reseller Program</h3>
                <p className="text-gray-600 mb-4">
                  Join our reseller program and grow your business with our
                  innovative solutions.
                </p>
              </div>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Technology Partners
                </h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with us to develop integrated solutions for mutual
                  customers.
                </p>
              </div>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Service Providers
                </h3>
                <p className="text-gray-600 mb-4">
                  Deliver value-added services to your customers with our
                  solutions.
                </p>
              </div>
            </motion.span>
          </div>

          <hr className="my-2 mt-20" />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[50px] font-bold text-blue-600"
          >
            Partners
          </motion.h1>

          <div className="flex flex-col items-center gap-16 mt-8">
            {isLoading && <p className="font-bold text-2xl">Loading...</p>}

            {sellers &&
              Object.entries(_.groupBy(sellers, "region")).map(
                ([region, regionSellers]) => (
                  <div key={region} className="w-full">
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-center mb-8"
                    >
                      {region.replace("_", " ")}
                    </motion.h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {regionSellers.map((seller: Seller, index: number) => (
                        <motion.div
                          key={seller.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-2 border border-gray-200 max-h-[450px] min-h-[350px] w-[380px] justify-stretch hover:shadow-xl transition-shadow"
                        >
                          {/* Seller Name */}
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="text-xl font-semibold text-gray-900"
                          >
                            {seller.name}
                          </motion.h3>

                          {/* Location & Email */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="text-gray-600"
                          >
                            📍 {seller.country}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="text-gray-600"
                          >
                            📧{" "}
                            {seller.email ? (
                              <a
                                href={`mailto:${seller.email}`}
                                className="hover:text-blue-800 underline transition-colors text-blue-600"
                              >
                                {seller.email}
                              </a>
                            ) : (
                              "No Email"
                            )}
                          </motion.p>

                          {/* Company & Address */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="text-gray-600"
                          >
                            🏢 {seller.company || "N/A"}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                            className="text-gray-500 text-sm"
                          >
                            {seller.address || "No Address Available"}
                          </motion.p>

                          {/* Phone Numbers */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                            className="mt-2"
                          >
                            <h4 className="text-gray-700 font-medium">
                              📞 Phone Numbers:
                            </h4>
                            {seller.phones.length > 0 ? (
                              <ul className="list-disc pl-5 text-gray-700">
                                {seller.phones.map((phone) => (
                                  <li key={phone.id} className="text-gray-600">
                                    {phone.number}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-500">No Phone Numbers</p>
                            )}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <h1 className="text-[50px] font-bold">
              Become an ARA Partner Today
            </h1>
            <p>
              Take the first step in joining our innovative and dynamic network.
            </p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
              // disabled={contactUs ? false : true}
              onClick={() => {
                setOpen(true);
              }}
              className={` text-white px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors mt-8 ml-[46%] `}
            >
              Apply Now
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              <DialogHeader className="border-b border-gray-700 px-6 py-4">
                <DialogTitle className="text-2xl font-bold text-white">
                  Become A Partner
                </DialogTitle>
              </DialogHeader>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto flex-1 px-6 py-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* How did you hear about us? */}
                  <div>
                    <label className="block mb-1">
                      How did you hear about us?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hearAboutUs"
                      required
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="Online Search">Online Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Exhibition">Exhibition</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="A Friend">A Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Company Information Section */}
                  <div className="pt-6 border-t border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">
                      Company Information
                    </h3>

                    {/* Company Name */}
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Address Line 1 */}
                      <div>
                        <label className="block mb-1">Address Line 1</label>
                        <input
                          type="text"
                          name="addressLine1"
                          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                          value={formData.addressLine1}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Address Line 2 */}
                      <div>
                        <label className="block mb-1">Address Line 2</label>
                        <input
                          type="text"
                          name="addressLine2"
                          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                          value={formData.addressLine2}
                          onChange={handleChange}
                        />
                      </div>

                      {/* City, State/Province */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">City</label>
                          <input
                            type="text"
                            name="city"
                            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="block mb-1">
                            State / Province / Region
                          </label>
                          <input
                            type="text"
                            name="state"
                            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Postal Code, Country */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">Postal Code</label>
                          <input
                            type="text"
                            name="postalCode"
                            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                            value={formData.postalCode}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="block mb-1">Country</label>
                          <select
                            name="country"
                            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Select a country</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Spain">Spain</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="China">China</option>
                          </select>
                        </div>
                      </div>

                      {/* Website */}
                      <div>
                        <label className="block mb-1">
                          Website <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          name="website"
                          required
                          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Products Interest */}
                  <div className="pt-6 border-t border-gray-700">
                    <label className="block mb-3">
                      What Products Are You Most Interested In?
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="siem"
                          id="siem"
                          className="w-4 h-4 rounded border-gray-700 bg-gray-800"
                          checked={formData.interestedProducts.siem}
                          onChange={handleChange}
                        />
                        <label htmlFor="siem" className="ml-2">
                          JAGUAR5000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="managedSecurity"
                          id="managedSecurity"
                          className="w-4 h-4 rounded border-gray-700 bg-gray-800"
                          checked={formData.interestedProducts.managedSecurity}
                          onChange={handleChange}
                        />
                        <label htmlFor="managedSecurity" className="ml-2">
                          ARA-TS
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="pt-6 border-t border-gray-700">
                    <label className="block mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>

              {/* Fixed Footer */}
              <div className="border-t border-gray-700 px-6 py-4">
                <div className="flex justify-center mb-4">
                  <Turnstile
                    siteKey={
                      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string
                    }
                    onSuccess={(token: string) => {
                      setIsVerified(true);
                      console.log("Verification token:", token);
                    }}
                    onError={() => {
                      setIsVerified(false);
                      setAlert({
                        type: "error",
                        message:
                          "Captcha verification failed. Please try again.",
                      });
                    }}
                    onExpire={() => {
                      setIsVerified(false);
                      setAlert({
                        type: "info",
                        message: "Captcha expired. Please verify again.",
                      });
                    }}
                  />
                </div>
                <button
                  disabled={isPending || !isVerified || !isFormValid}
                  type="submit"
                  className={`w-full ${
                    isPending || !isVerified || !isFormValid
                      ? "bg-blue-400"
                      : "bg-blue-600"
                  } text-white py-3 px-4 rounded ${
                    isPending || !isVerified || !isFormValid
                      ? "cursor-not-allowed"
                      : "hover:bg-blue-700"
                  } transition-colors font-medium`}
                  onClick={handleSubmit}
                >
                  {isPending
                    ? "submitting..."
                    : !isVerified
                    ? "Complete Captcha"
                    : !isFormValid
                    ? "Fill Required Fields"
                    : "Submit"}
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
