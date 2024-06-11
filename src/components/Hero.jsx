import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-700 text-white h-screen flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-3xl md:text-5xl mb-20">Developer</h2>
      <img
        src="https://scontent.fmex11-4.fna.fbcdn.net/v/t39.30808-6/448200050_1975424342908748_6563593718627503901_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEtixbXdTGHc95kuVSI-BUPn_2sKLZTBdSf_awotlMF1D3gVI9JZpcOrhSnDyBcAi7feJRuOPgvZ-8rNXYI9g_t&_nc_ohc=baOBIESgxtEQ7kNvgGAZr_x&_nc_zt=23&_nc_ht=scontent.fmex11-4.fna&oh=00_AYBT-l12njsBld402I5hZ2EUdqZaM_RVzxdaqn2wDp_3qg&oe=666EB821"
        alt="Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full mb-4"
      />
      <p className="text-lg max-w-lg mx-auto text-justify text-center">
        Soy un apasionado del desarrollo back-end, fascinado por el ingenio computacional y la satisfacción de crear sistemas robustos y escalables. Me sumerjo en el corazón de las aplicaciones, diseñando y construyendo la arquitectura que las hace funcionar.
      </p>
    </section>
  );
};

export default Hero;

