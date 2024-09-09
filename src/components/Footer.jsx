import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-4 px-6">
      <div className="mx-auto text-center md:flex md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
