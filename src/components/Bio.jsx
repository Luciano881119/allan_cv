import React from "react";

const seoStyle = {
  fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
  fontWeight:'500px',
  fontSize:'19px',
  backgroundColor: "#A4A4A4",
  color: "white",
  borderRadius: "20px",
  padding: "4px 12px",
  marginTop: "10px"
};

function Bio() {
  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <div
            className="row"
            style={{
              width: "400px",
              display: "flex",
              height: "fit-content",
              justifyContent: "space-between",
            }}
          >
            <div className="column" style={seoStyle}>
              Diseno de producto
            </div>
            <div className="column" style={seoStyle}>
              UX
            </div>
            <div className="column" style={seoStyle}>
              UI
            </div>
          </div>
          <div
            className="row"
            style={{ width: "400px",
            display: "flex",
            height: "fit-content",
            justifyContent: "space-between", }}
          >
            <div className="column" style={seoStyle}>
              Consultoria CX
            </div>
            <div className="column" style={seoStyle}>
              Design Thinking
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          fontSize: "14px",
          width: "400px",
          textAlign: "left",
          fontFamily: "serif",
        }}
      >
        <p style={{ lineHeight:'16px'}}>
          Diseñador de producto con{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {" "}
            más de 4 años de trayectoria
          </span>{" "}
          creando productos y servicios digitales que mejoren la vida de los
          usuarios. Con experiencia en CX, content design y transformación
          digital, utilizo mis habilidades en investigación, design thinking y
          consultoría para idear soluciones a problemas de usuarios.
        </p>
      </div>
    </div>
  );
}

export default Bio;
