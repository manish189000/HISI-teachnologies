import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Blockchain Service",
      price: 20,
      features: [
        "Blockchain API Access",
        "Smart Contract Deployment",
        "Decentralized Storage",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Cloud Service",
      price: 50,
      features: [
        "10GB Storage",
        "Unlimited Bandwidth",
        "Automatic Backups",
        "SSL Certificate",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Web Service",
      price: 100,
      features: [
        "Custom Domain",
        "Responsive Design",
        "SEO Optimization",
        "E-commerce Integration",
        "24/7 Customer Support",
      ],
    },
    {
      name: "AI Experts",
      price: 80,
      features: [
        "Machine Learning Models",
        "Data Analysis Tools",
        "Predictive Analytics",
        "24/7 Support from AI Specialists",
      ],
    },
    {
      name: "E-commerce Service",
      price: 120,
      features: [
        "Product Catalog Management",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Order Management System",
        "24/7 Customer Support",
      ],
    },
  ];

  return (
    <>
      <div className="parent w-full flex justify-center items-center flex-col bg-black pt-[4rem]">
        <p className="text-white text-center text-3xl">
          Pricing for all services
        </p>
        <p className="text-white text-center text-3xl">
          Choose the perfect plan for your needs.
        </p>
      </div>

      <section className="py-14 flex flex-wrap justify-center bg-black">
        {plans.map((item, idx) => (
          <div
            key={idx}
            className=" w-[300px] flex items-stretch flex-col p-8 rounded-xl border-2 mx-4 mb-8"
            style={{ maxWidth: "300px" }}
          >
            <div>
              <span className="text-white font-medium">{item.name}</span>
              <div className="mt-4 text-gray-800 text-3xl font-semibold">
                ${item.price}{" "}
                <span className="text-xl text-gray-600 font-normal">/mo</span>
              </div>
            </div>
            <ul className="py-8 space-y-3">
              {item.features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {featureItem}
                </li>
              ))}
            </ul>
            <div className="flex-1 flex items-end">
              <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-black bg-white hover:bg-black hover:text-white active:bg-white">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Pricing;
