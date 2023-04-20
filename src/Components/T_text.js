import React from "react";

function Text(props) {
  const { color, fontSize, marginTop,marginBottom,paddingTop,paddingBottom, text, textAlign } = props;
  const { pcolor, pfontSize, pwidth, ptext } = props;
  return (
    <div style={{ textAlign: textAlign,marginTop:marginTop,marginBottom:marginBottom,paddingTop:paddingTop,paddingBottom:paddingBottom}}>
      <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>
      <p style={{ color: pcolor, fontSize: pfontSize, pwidth }}>{ptext}</p>
    </div>
  );
}
export default Text;
