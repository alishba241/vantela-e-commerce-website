"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Signup = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ! input fileds validation

  const validateForm = (formData: Record<string, string>) => {
    const errors: Record<string, string> = {};
    const addressRegex = /^[a-zA-Z0-9\s,./-]+$/; // adress validation
    const postalCodeRegex = /^[0-9]{4,6}$/; // postal code vald
    const cardNumberRegex = /^[0-9]{16}$/; // card num vald
    const cvcRegex = /^[0-9]{3,4}$/; // cvc vald

    if (!addressRegex.test(formData.address)) {
      errors.address = "Please enter a valid address.";
    }
    if (!formData.city.trim()) {
      errors.city = "City is required.";
    }
    if (!formData.state.trim()) {
      errors.state = "State/Province is required.";
    }
    if (!postalCodeRegex.test(formData.postalCode)) {
      errors.postalCode = "Please enter a valid postal code.";
    }
    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Please enter a valid 16-digit card number.";
    }
    if (!formData.expirationDate.trim()) {
      errors.expirationDate = "Expiration date is required.";
    }
    if (!cvcRegex.test(formData.cvc)) {
      errors.cvc = "Please enter a valid 3-4 digit CVC.";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement)) as Record<string, string>;
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsOrderComplete(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full lg:max-w-4xl max-w-2xl sm:max-w-xl bg-white md:p-8 sm:px-6 lg:px-8 px-6 py-4">
        {isOrderComplete ? (
          <div className="text-center flex flex-col justify-center items-center">
            <div className="sm:w-24 sm:h-24 w-20 h-20 border-[#1F3E97] border-4 rounded-full flex justify-center items-center">
              <FaCheck className="sm:text-4xl text-3xl text-[#1F3E97]" />
            </div>
            <h2 className="lg:text-[32px] sm:text-3xl text-[22px] text-[#1F3E97] font-medium mt-8 sm:mb-4 mb-2">
              Thank You for Shopping!
            </h2>
            <p className="sm:text-lg text-sm text-[#464646]">
              Your order has been successfully placed.
            </p>
          </div>
        ) : (
          <>
            <h2 className="lg:text-[32px] sm:text-[24px] text-[18px] text-[#464646] font-medium text-center lg:mt-8 mb-10">
              Payment
              </h2>
              <div className="border w-full"></div>
            <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#1F3E97]">
                  Shipping Address <span className="text-[#EA1C0F]">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                />
                {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1F3E97]">
                    City <span className="text-[#EA1C0F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                  />
                  {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1F3E97]">
                    State/Province <span className="text-[#EA1C0F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                  />
                  {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-[#1F3E97]">
                  Postal Code <span className="text-[#EA1C0F]">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                />
                {formErrors.postalCode && <p className="text-red-500 text-sm">{formErrors.postalCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1F3E97]">
                  Card Number <span className="text-[#EA1C0F]">*</span>
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                />
                {formErrors.cardNumber && <p className="text-red-500 text-sm">{formErrors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1F3E97]">
                    Expiration Date <span className="text-[#EA1C0F]">*</span>
                  </label>
                  <input
                    type="date"
                    name="expirationDate"
                    className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                  />
                  {formErrors.expirationDate && (
                    <p className="text-red-500 text-sm">{formErrors.expirationDate}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1F3E97]">
                    CVC <span className="text-[#EA1C0F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    className="mt-4 block w-full bg-[#F1F1F1] rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                  />
                  {formErrors.cvc && <p className="text-red-500 text-sm">{formErrors.cvc}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="relative top-6 w-full bg-[#1F3E97] text-white py-2 rounded-md lg:text-lg text-sm font-medium hover:bg-blue-700"
              >
                Complete Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
