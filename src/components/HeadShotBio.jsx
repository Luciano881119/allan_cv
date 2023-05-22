import React from "react";

const HeadShotBio = () => {
  return (
    <div
      className="container"
      style={{ width: "400px", display: "flex", height: "fit-content" }}
    >
      <div className="left-column" style={{ width: "50%" }}>
        <img
          src="/src/assets/HeadShot_1.png"
          alt="HeadShot1.png"
          style={{ borderRadius: "50%", width: "90%", height: "auto" }}
        />
      </div>
      <div className="right-column" style={{ width: "50%" }}>
        <div>
          <img
            src="/src/assets/Frame_11.png"
            alt="Frame_11.png"
            style={{ width: "auto", height: "auto", float: "right" }}
          />
        </div>
        <h1
          style={{
            fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
            textAlign: "left",
            weight: "700px",
            marginBottom: "0",
            paddingBottom: "0",
          }}
        >
          Allan <br />
          R.Castro
        </h1>

        <p
          style={{
            color: "#8D51A3",
            fontFamily: 'Futura, "Helvetica", "Arial", sans-serif',
            textAlign: "left",
            weight: "500px",
            marginTop: "0",
            paddingTop: "0",
            fontSize: "24px",
          }}
        >
          UX/UI Designer
        </p>
      </div>
    </div>
  );
};
<img
  src="/src/assets/Headshot_1.png"
  alt="HeadShot1.png"
  style={{ borderRadius: "50%", width: "300px", height: "300px" }}
/>;

export default HeadShotBio;
