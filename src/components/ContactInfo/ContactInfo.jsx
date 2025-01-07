import React from "react";
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold font-patua_one mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            My <span className="text-[#12867F]">Contact Info</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-[#4E635C] max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            I’m a web developer willing to learn from your company, creating
            website designs, and specializing in frontend and backend
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
           data-aos="fade-up"
           data-aos-duration="500"
           data-aos-delay="400"
          >
            <IoCall className="text-4xl text-[#12867F] mb-4" />
            <h3 className="text-xl font-semibold text-[#4E635C] mb-2">Phone</h3>
            <p className="text-[#4E635C]">+123 456 7890</p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
           data-aos="fade-up"
           data-aos-duration="500"
           data-aos-delay="400"
          >
            <IoMail className="text-4xl text-[#12867F] mb-4" />
            <h3 className="text-xl font-semibold text-[#4E635C] mb-2">Email</h3>
            <p className="text-[#4E635C]">example@email.com</p>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
           data-aos="fade-up"
           data-aos-duration="500"
           data-aos-delay="400"
          >
            <IoLocationSharp className="text-4xl text-[#12867F] mb-4" />
            <h3 className="text-xl font-semibold text-[#4E635C] mb-2">Address</h3>
            <p className="text-[#4E635C]">123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
