import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        <a href="https://www.linkedin.com/in/allanrcastro/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/inLogo.png" alt="Icon 1" style={iconStyle} />
        </a>
        <a href="mailto:allancastro.dg@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/mailLogo.png" alt="Icon 2" style={iconStyle} />
        </a>
        <a href="/src/assets/allan_castro_cv.zip" download target="_blank" >
          <img
            src="/src/assets/downloadLogo.png"
            alt="PDF Download"
            style={iconStyle}
          />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  marginTop: "10px",
  backgroundColor: "transparent",
  textAlign: "center",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const iconStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "100%",
  margin: "0 10px",
};

export default Footer;
