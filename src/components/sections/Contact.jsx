import { useState } from "react";
import { Headphones } from "lucide-react";
import bg from "../../assets/contact_bg.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      className="md:min-h-screen flex items-center py-16 md:py-24 bg-black text-white rounded-3xl md:rounded-none lg:rounded-none"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Left Column - Content */}
          <div className="hidden md:block lg:block max-w-xl">
            <div className="inline-flex items-center rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-8">
              <Headphones className="mr-2 h-4 w-4" />
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-400">
              Ganttify enables you to achieve clarity and significant results on
              a large scale by linking tasks and workflows to the overarching
              objectives of the company
            </p>
          </div>
          {/* Left Column - Mobile */}
          <div className="max-w-xl md:hidden lg:hidden text-center ">
            <h2 className="text-5xl mb-6  leading-snug font-semibold">
              A Better Way to Work Today, Together
            </h2>
            <p className="text-lg text-gray-200 px-1">
              Ganttify enables you to achieve clarity and significant results on
              a large scale by linking tasks and workflows to the overarching
              objectives of the company
            </p>
          </div>
          {/* Right Column - Form */}
          <div className="hidden md:block lg:block bg-white rounded-3xl p-8 md:p-10 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                  placeholder="johndoe@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Problem Descriptions
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full h-[200px] px-4 py-3 text-black rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-colors resize-none"
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Right Column - Buttons */}
          <div className="md:hidden lg:hidden flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-6">
            <button
              className="w-full sm:w-auto px-6 py-3 bg-white text-black  font-medium hover:bg-gray-100 transition-colors"
              style={{
                borderRadius: "12px",
              }}
            >
              Get Started
            </button>
            <button
              className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              style={{
                borderRadius: "12px",
              }}
            >
              How it Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
