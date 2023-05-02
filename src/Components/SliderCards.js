import React from "react";

const SlideCards = (props) => {
  const { image } = props;
  const cardStyles = {
    margin: "auto",
    display: "flex",
    height: "60vh",
    width: "60vw",
    backgroundColor: "white",
    borderRadius: "10px",
    flexDirection: props.rowreverse ? "row-reverse" : "row",
  };

  const leftStyles = {
    width: "54%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5%",
  };

  const h2Styles = {
    fontSize: "3vw",
    marginBottom: "1em",
  };

  const pStyles = {
    fontSize: "1.6vw",
  };

  const rightStyles = {
    width: "43%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyles = {
    width: "80%",
    height: "110%",
  };

  return (
    <div style={{marginBottom:'40px'}}>
      <div style={cardStyles}>
        <div style={leftStyles}>
          <h1 style={h2Styles}>Creche-Montessori</h1>
          <p style={pStyles}>
            The early years of a child’s education are ones of excitement,
            exploration, and discovery. A time when they are introduced to a
            world beyond the secure and familiar confines of home life, when
            they begin to make friends, experience new play opportunities and
            interact with adults beyond those of their immediate family.
          </p>
        </div>

        <div style={rightStyles}>
          <img src={image} alt="pic here" style={imgStyles} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      ></div>
    </div>
  );
};

export default SlideCards;
