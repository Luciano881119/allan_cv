import React from "react";
import Accordion from "./Accordion";

const employerNameStyle = {
  fontSize: "12px",
  color: "#8D51A3",
  fontStyle: "italic",
  textAlign: "left",
};

const dateStyle = {
  backgroundColor: "#8D51A3",
  color: "white",
  borderRadius: "20px",
  padding: "2px 6px",
  fontSize: "10px",
  float: "right",
};

const positionStyle = {
  textAlign: "left",
  fontSize: "15px",
  fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
  fontWeight: "500px",
  marginBottom: "0px",
};

const positionSeoStyle = {
  textAlign: "justify",
  color: "#898888",
  fontSize: "15px",
  fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
  fontWeight: "500px",
  marginTop: "0px",
};

const bulletPointStyle = {
  fontSize: "13px",
  textAlign: "left",
  width: "350px",
  lineHeight: "16px",
  fontWeight: "400px",
  marginBottom: "15px",
};

export const TimeLineAccordion = () => {
  return (
    <>
      <div style={{ widht: "400px" }}>
        <Accordion
          title="Experiencia"
          content={
            <>
              <div style={{ width: "400px" }}>
                <p style={employerNameStyle}>
                  Findasense, a Majorel X Company
                  <span style={dateStyle}>From aug 2019 - current</span>
                </p>
                <h2 style={positionStyle}>
                  CX Content Architect UX/UI Platform | Product Designer
                </h2>
                <p style={positionSeoStyle}>
                  #UI #ProductDesign #CX #Consulting #DesignSystems
                </p>
              </div>
              <div>
                <ul>
                  <li style={bulletPointStyle}>
                    <span style={{ fontWeight: "bold" }}>
                      Diseñador UX/UI SSr. líder del equipo de CX Platforms,
                      supervisor de los proyectos en curso y de new business del
                      área.
                    </span>{" "}
                    Apoyo al equipo y encargado de procesos de contratación de
                    perfiles UI/UX.
                  </li>
                  <li style={bulletPointStyle}>
                    <span style={{ fontWeight: "bold" }}>
                      Líder de la migración de portal de e-learning para
                      Novo-Nordisk a un nuevo sistema de diseño.
                    </span>{" "}
                    Actualización de la estructura del sitio, iniciativas,
                    comunicación visual y generación de experiencia de acuerdo
                    al perfil de usuario.
                  </li>
                  <li style={bulletPointStyle}>
                    Consultor en proyectos de investigación, construcción de
                    mapas de experiencia del consumidor, determinar
                    touch-points; detectar fricciones y oportunidades para la
                    optimización de la experiencia de cliente (CX) a través de
                    productos y servicios.
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      
    </>
  );
};
