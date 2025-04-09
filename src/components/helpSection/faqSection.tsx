// FAQSection Component
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  openFaq: number | null;
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  openFaq,
  setOpenFaq,
}) => {
  return (
    <div className="mt-12 sm:mt-16 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-8 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer transition-all duration-300"
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <span className="text-gray-600 text-2xl">
                {openFaq === index ? "−" : "+"}
              </span>
            </div>
            {openFaq === index && (
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
