import { FormData } from "@/app/types/partnerType";

const PartnerForm = ({
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
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Personal Information */}
    <div className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        required
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        required
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        value={formData.email}
        onChange={handleChange}
      />
      {/* Add remaining form fields */}
    </div>

    {/* Company Information */}
    <div className="pt-6 border-t border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Company Information</h3>
      {/* Add company information fields */}
    </div>

    {/* Products Interest */}
    <div className="pt-6 border-t border-gray-700">
      {/* Add product interest checkboxes */}
    </div>

    {/* Message */}
    <div className="pt-6 border-t border-gray-700">
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        value={formData.message}
        onChange={handleChange}
      />
    </div>
  </form>
);
export default PartnerForm;
