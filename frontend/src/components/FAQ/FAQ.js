import React, { useState } from "react";
import "./FAQstyle.css";

const FAQData = [
  {
    question: "How can I receive food donations?",
    answer:
      "If you are in need of food assistance, you can browse through our list of registered food donors in your area and contact a donor near you. Reach out to the donor to arrange for the receipt of food donations.",
  },
  {
    question: "How can I donate food?",
    answer:
      "You can donate food by filling out the donor form, and a receiver near your area will contact you to arrange the donation.",
  },
  {
    question: "Can normal people donate?",
    answer:
      "Yes, anyone can make a positive impact by donating food or volunteering to support food donation efforts.",
  },
  {
    question: "What types of food are commonly donated?",
    answer:
      "Non-perishable items such as canned goods, pasta, rice, and dried foods are commonly donated, but fresh produce and perishable items are also appreciated when they can be accepted.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {FAQData.map((faq, index) => (
          <li key={index}>
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
