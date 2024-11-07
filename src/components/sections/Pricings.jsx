"use client";

import { useState } from "react";
import { Check, CircleCheck, CreditCard } from "lucide-react";
import bg from "../../assets/gradientBG_rotated.png";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly");

  const plans = [
    {
      name: "Personal",
      price: billingType === "monthly" ? 29 : 290,
      description:
        "For individuals and small teams looking to manage their tasks",
      features: [
        "Unlimited contacts",
        "Bulk emailing",
        "AI Integration",
        "View & share up to 3 years",
        "Collaboration & permissions",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: billingType === "monthly" ? 39 : 390,
      description:
        "For growing teams that need to track their projects' progress and hit deadlines",
      features: [
        "Email sequences",
        "Send emails from multiple domains",
        "Connect multiple email accounts",
        "Fully adjustable sharing permissions",
        "Migration services",
      ],
      highlighted: true,
    },
    {
      name: "Beyond limits",
      price: "Custom Plan",
      description:
        "For companies that need to manage a portfolio of work and goals across departments",
      features: [
        "White glove onboarding",
        "Custom billing",
        "Dedicated slack channel",
        "Dedicated point of contact",
        "Unlimited reporting",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      className="py-16 rounded-3xl md:rounded-none lg:rounded-none md:py-24 bg-black text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "90vh",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-8 md:mb-0">
            <div
              className="inline-flex items-center bg-white/10 px-3 py-1 text-sm text-white mb-8"
              style={{ borderRadius: "8px" }}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pricing
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white"
              style={{ fontWeight: "600" }}
            >
              Simple and Flexible
              <br />
              Pricing
            </h2>
          </div>

          <div
            className="w-full flex items-center bg-white/10 p-1 md:w-auto "
            style={{ borderRadius: "12px" }}
          >
            <button
              onClick={() => setBillingType("monthly")}
              className={`w-full px-4 py-2 text-sm font-medium md:w-auto lg:w-auto transition-colors ${
                billingType === "monthly" ? "bg-white text-black" : "text-white"
              }`}
              style={{ borderRadius: "8px" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingType("annually")}
              className={`w-full px-4 py-2 text-sm font-medium md:w-auto lg:w-auto transition-colors ${
                billingType === "annually"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
              style={{ borderRadius: "8px" }}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8  ${
                plan.highlighted
                  ? "bg-white text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              <div className="mb-8">
                <h3
                  className="text-xl text-[#666D80] mb-4"
                  style={{ fontWeight: "500" }}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline">
                      <span className="text-5xl" style={{ fontWeight: "600" }}>
                        ${plan.price}
                      </span>
                      <span
                        className="ml-2 text-lg opacity-70"
                        style={{ fontWeight: "400" }}
                      >
                        per {billingType === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                  ) : (
                    <div className="text-5xl" style={{ fontWeight: "600" }}>
                      {plan.price}
                    </div>
                  )}
                </div>
                <p className="text-sm opacity-70">{plan.description}</p>
                <div
                  className={`mt-4 border-dashed border-t-2 ${
                    plan.name === "Pro"
                      ? "border-#DFE1E7"
                      : "border-white border-opacity-10"
                  }`}
                />
              </div>

              <div className="mb-8">
                <p className="font-medium mb-4">
                  {plan.name === "Pro"
                    ? "Everything in Standard, plus:"
                    : plan.name === "Beyond limits"
                    ? "Everything in Standard & Pro, plus:"
                    : "This Plan Includes:"}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div
                        className={`mr-3 border p-1 rounded-full  ${
                          plan.name === "Pro"
                            ? "bg-[#ECEFF3]"
                            : "bg-white bg-opacity-10"
                        } border-transparent`}
                      >
                        <Check className="h-3 w-3" strokeWidth={4} />
                      </div>
                      <span
                        className={`text-base  ${
                          plan.name === "Pro"
                            ? "text-gray-500"
                            : "text-white text-opacity-50"
                        }`}
                        style={{
                          fontWeight: "400",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-2xl font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
