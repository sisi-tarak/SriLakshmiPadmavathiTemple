import React from "react";

const Emap = () => {
  return (

    <div className="w-full flex items-center justify-center md:p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62045.465753154436!2d79.40887814206545!3d13.606484113029035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a4d4bf2f209fdd1%3A0x9c2a075a7d399f6e!2sPadmavathi%20Temple%20Garden%2C%20Tiruchanur%2C%20Tirupati%2C%20Andhra%20Pradesh!3m2!1d13.6064875!2d79.4500781!5e0!3m2!1sen!2sin!4v1743435038343!5m2!1sen!2sin"
        className="w-full lg:w-[80%] 2xl:w-[60%] h-96 md:h-[500px]" // Responsive width and fixed height

        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Emap;
