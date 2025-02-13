type PartnerCardProps = {
  title: string;
  description: string;
};

export const PartnerCard = ({ title, description }: PartnerCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
);
