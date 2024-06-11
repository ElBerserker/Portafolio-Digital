import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-700 text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl mb-20">Contact</h2>
      <div className="flex flex-col items-center space-y-4">
        <a href="https://wa.me/qr/C3ZBFZLUTIIOF1" className="flex items-center space-x-2">
          <FaWhatsapp className="text-4xl" />
          <span>WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/mrbrightside_75?igsh=MTZubnBoeXh6YWh6YQ==" className="flex items-center space-x-2">
          <FaInstagram className="text-4xl" />
          <span>Instagram</span>
        </a>
        <a href="https://www.facebook.com/raulhernandezlopez1975?mibextid=ZbWKwL" className="flex items-center space-x-2">
          <FaFacebook className="text-4xl" />
          <span>Facebook</span>
        </a>
        <a href="mailto:raul.hernandez.lopez.dev@gmail.com" className="flex items-center space-x-2">
          <FaEnvelope className="text-4xl" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;

