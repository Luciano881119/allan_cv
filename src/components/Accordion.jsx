import React, { useState } from "react";

const headerStyle = {
  fontSize: "18px",
  fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
  textAlign: "left",
  weight: "700px",
  borderBottom: "2px solid",
};

const employerNameStyle = {
  fontSize: "14px",
  color: "#8D51A3",
  fontStyle: "italic",
  textAlign: "left",
};

const dateStyle = {
  backgroundColor: "#8D51A3",
  color: "white",
  borderRadius: "20px",
  padding: "2px 6px",
  fontSize: "12px",
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

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 1,
      title: "Experiencia",
      content: (
        <>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={employerNameStyle}>
              Findasense, a Majorel X Company
            </span>
            <span style={dateStyle}>From Aug.2019 - current</span>
          </p>

          <p>
            <h2 style={positionStyle}>
              CX Content Architect UX/UI Platform | Product Designer
            </h2>
          </p>
          <p style={positionSeoStyle}>
            #UI #ProductDesign #CX #Consulting #DesignSystems
          </p>
          <ul>
            <li style={bulletPointStyle}>
              <span style={{ fontWeight: "bold" }}>
                Diseñador UX/UI SSr. líder del equipo de CX Platforms,
                supervisor de los proyectos en curso y de new business del área.
              </span>{" "}
              Apoyo al equipo y encargado de procesos de contratación de
              perfiles UI/UX.
            </li>
            <li style={bulletPointStyle}>
              <span style={{ fontWeight: "bold" }}>
                Líder de la migración de portal de e-learning para Novo-Nordisk
                a un nuevo sistema de diseño.
              </span>{" "}
              Actualización de la estructura del sitio, iniciativas,
              comunicación visual y generación de experiencia de acuerdo al
              perfil de usuario.
            </li>
            <li style={bulletPointStyle}>
              Consultor en proyectos de investigación, construcción de mapas de
              experiencia del consumidor, determinar touch-points; detectar
              fricciones y oportunidades para la optimización de la experiencia
              de cliente (CX) a través de productos y servicios.
            </li>
          </ul>
          <>
            <p>
              <h2 style={positionStyle}>CX Content Specialist | UI Designer</h2>
            </p>
            <p style={positionSeoStyle}>
              #UI #Scrum #ProductDesign #B2B #B2C #Consulting
            </p>
            <ul>
              <li style={bulletPointStyle}>
                <span style={{ fontWeight: "bold" }}>
                  Diseñador UI del equipo de Digital Transformation.
                </span>{" "}
                co-liderando el equipo creativo, donde trabajamos en la
                consultoría y construcción de{" "}
                <span style={{ fontWeight: "bold" }}>
                  “Coca-Cola en tu Hogar”
                </span>{" "}
                un landing page{" "}
                <span style={{ fontWeight: "bold" }}>
                  B2B que pronto migró a un e-commerce B2C
                </span>{" "}
                que tuvo cobertura en 8 países de la región.
              </li>
              <li style={bulletPointStyle}>
                Colaborar con diseñadores/escritores UX, desarrolladores en
                ambientes de{" "}
                <span style={{ fontWeight: "bold" }}>
                  metodologías ágiles (SCRUM), diseñar wireframes y contenido
                  junto al equipo de SEO
                </span>{" "}
                para el cumplimiento de los objetivos de los stakeholders.
              </li>
            </ul>
          </>
          <>
            <p>
              <h2 style={positionStyle}>
                CX Content Specialist | Content Designer
              </h2>
            </p>
            <p style={positionSeoStyle}>
              #SocialMedia #ArtDirecton #DigitalAdvertising
            </p>
            <ul>
              <li style={bulletPointStyle}>
                Director de arte digital para el Content Hub de DirecTV para la
                copa américa 2019, generando contenidos RTM, con unos resultados
                de{" "}
                <span style={{ fontWeight: "bold" }}>
                  21% de crecimiento de la comunidad.
                </span>
              </li>

              <li style={bulletPointStyle}>
                Director de arte digital para Coca-Cola región y Key Accounts.
                Creando contenido para RRSS de marcas como Fanta, Sprite,
                Schweppes, Dogger, McDonalds, Qbano, Dunkin’, etc.
              </li>
            </ul>
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={employerNameStyle}>Key Visual Lab</span>
              <span style={dateStyle}>From Aug.2018 - Aug.2019 - 1 Year</span>
            </p>
            <p>
              <h2 style={positionStyle}>
                CX Content Specialist | Content Designer
              </h2>
            </p>
            <p style={positionSeoStyle}>
              #Branding #CMS #ProductDesign #SocialMedia
            </p>
            <ul>
              <li style={bulletPointStyle}>
                <span style={{ fontWeight: "bold" }}>
                  Conceptualización, construcción de marcas y diseño digital
                  (RRSS)
                </span>{" "}
                para diferentes segmentos de mercado como lo es belleza y salud,
                transporte, bienes raíces y educación. Proyectos en Colombia,
                Londres, Nueva York, Miami y Montreal.
              </li>
              <li style={bulletPointStyle}>
                <span style={{ fontWeight: "bold" }}>
                  Líder en la creación de productos digitales
                </span>
                , colaborando con diseñadores y web masters en el desarrollo de{" "}
                <span style={{ fontWeight: "bold" }}>
                  sitios web en plataformas CMS
                </span>
                , diseño de contenidos y lenguaje visual consistente para la
                comunicación de marca.
              </li>
            </ul>
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={employerNameStyle}>Octopus CMS</span>
              <span style={dateStyle}>From Oct.2018 - Aug.2019 - 8 Months</span>
            </p>
            <p>
              <h2 style={positionStyle}>Art Director</h2>
            </p>
            <p style={positionSeoStyle}>#CMS #Branding #Consulting</p>
            <ul>
              <li style={bulletPointStyle}>
                Construcción y{" "}
                <span style={{ fontWeight: "bold" }}>
                  desarrollo de la imagen corporativa para la empresa de
                  transformación tecnológica
                </span>
                , confoco en activos digitales; creando una imagen y
                comunicación consistente.
              </li>
              <li style={bulletPointStyle}>
                Consultor de los productos digitales desarrollados por el
                equipo, en temas de{" "}
                <span style={{ fontWeight: "bold" }}>
                  contenidos visuales, estructura y componentes UI para sitios
                  en plataformas CMS.
                </span>
              </li>
            </ul>
          </>
        </>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: {
        positionStyle,
      },
    },
    {
      id: 2,
      title: "Hard Skills",
      content: (
        <ul>
          <li>UX / UI</li>
          <li>Design Thinking</li>
          <li>Adobe CC</li>
          <li>Figma</li>
          <li>Miro</li>
          <li>Sistemas de Diseno</li>
          <li>Mapas de Experiencia (CJM)</li>
          <li>Gestion de Projectos</li>
          <li>Wireframing</li>
          <li>Arquitecturas de la informacion</li>
        </ul>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left", fontWeight: "bold" },
    },
    {
      id: 3,
      title: "Soft Skills",
      content: (
        <ul>
          <li>Aprendizaje Rapido</li>
          <li>Comunicacion y Colaboracion</li>
          <li>Liderazgo</li>
          <li>Mentalidad de Emprendedor</li>
          <li>Escucha Activa</li>
          <li>Story-Telling</li>
        </ul>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left", fontWeight: "bold" },
    },
    {
      id: 4,
      title: "Educacion",
      content: (
        <>
          <p>
            User Experience Research
            <br /> and Design Specialization
            <span style={dateStyle}>On going</span>
          </p>
          <p style={employerNameStyle}>University of Michigan</p>
          <p>
            Diseno Grafico
            <span style={dateStyle}>Completado / 2013 - 2015</span>
          </p>
          <p style={employerNameStyle}>Taller Cinco Centro de Diseno</p>
          <p>
            Diseno Grafico, Animacion,
            <br /> Multimedia y Sitios Web.
            <span style={dateStyle}> Inicio / 2011 - 2013</span>
          </p>
          <p style={employerNameStyle}>LCI Bogota</p>
        </>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left" },
    },
    {
      id: 5,
      title: "Estudios Adicionales",
      content: (
        <>
          <p>
            Remote Design Sprint
            <span style={dateStyle}>Completado / 2021</span>
          </p>
          <p style={employerNameStyle}>Domestika</p>
          <p>
            Introduction to Design Systems
            <br />
            with Figma<span style={dateStyle}>Completado / 2020</span>
          </p>
          <p style={employerNameStyle}>Domestika</p>
          <p>
            Diplomado en Direccion de Arte
            <span style={dateStyle}> Completado / 2017</span>
          </p>
          <p style={employerNameStyle}>Taller Cinco Centro de Diseno</p>
        </>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left" },
    },
    {
      id: 6,
      title: "Idiomas",
      content: (
        <ul>
          <li>
            Espanol<span style={dateStyle}>Nativo</span>
          </li>
          <li>
            English<span style={dateStyle}>C1 / Advance</span>
          </li>
        </ul>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left", fontWeight: "bold" },
    },
    {
      id: 7,
      title: "Contacto",
      content: (
        <>
          <p>allancastro.dg@gmail.com<br/>  (+57)322 381 4477</p>
          <p>
            <a href="https://www.linkedin.com/in/allanrcastro/">
              https://www.linkedin.com/in/allanrcastro/
            </a>
          </p>
        </>
      ),
      isExpanded: false,
      headerStyle: {
        fontSize: "18px",
        fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        weight: "700px",
        borderBottom: "2px solid",
        marginBottom: "0px",
      },
      contentStyle: { textAlign: "left", fontWeight: "bold" },
    },
    
    
  ]);

  const toggleAccordion = (itemId) => {
    setAccordionItems((prevState) =>
      prevState.map((item) => ({
        ...item,
        isExpanded: item.id === itemId ? !item.isExpanded : false,
      }))
    );
  };

  return (
    <div>
      {accordionItems.map((item) => (
        <div key={item.id}>
          <div
            className={`accordion-header ${item.isExpanded ? "expanded" : ""}`}
            onClick={() => toggleAccordion(item.id)}
            style={item.headerStyle}
          >
            <p style={{ marginBottom: "0px" }}>
              {item.title}
              <span
                className="material-symbols-outlined"
                style={{ float: "right" }}
              >
                {item.isExpanded ? "expand_less" : "expand_more"}
              </span>
            </p>
          </div>
          {item.isExpanded && (
            <div
              className={`accordion-content ${
                item.isExpanded ? "expanded" : ""
              }`}
              style={item.contentStyle}
            >
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
