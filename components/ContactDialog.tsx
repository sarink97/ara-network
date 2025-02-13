"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PartnerForm from "./PartnerForm";
import { FormData } from "@/app/types/partnerType";

export const ContactDialog = ({
  formData,
  handleChange,
  handleSubmit,
}: {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <Dialog>
    <DialogTrigger className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
      Contact Us
    </DialogTrigger>
    <DialogContent className="bg-gray-900 text-white max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <DialogHeader className="border-b border-gray-700 px-6 py-4">
        <DialogTitle className="text-2xl font-bold text-white">
          Become A Partner
        </DialogTitle>
      </DialogHeader>
      <div className="overflow-y-auto flex-1 px-6 py-4">
        <PartnerForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="border-t border-gray-700 px-6 py-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors font-medium"
          onClick={handleSubmit}
        >
          Submit Info
        </button>
      </div>
    </DialogContent>
  </Dialog>
);
