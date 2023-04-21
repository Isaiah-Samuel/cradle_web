// import React from "react";
// import Text from "../Components/T_text";
// import '../styles/SliderCards.css';

// function Cards(props) {

//     const {image} = props

//    const  cards_info = {
//         color: "#0B0746",
//         pcolor:"#0B0746",
//         fontSize:'35px',
//         pfontSize:'24px',
//         bgcolor:'white',
//         text:<h1>Creche-Montessori</h1>,
//         ptext:<p>The early years of a child’s education are <br/> ones of excitement, exploration, and <br/> discovery. A time when they are <br/> introduced to a world beyond the secure <br/> and familiar confines of home life, when <br/> they begin to make friends, experience <br/>new play opportunities and interact with<br/> adults beyond those of their immediate<br/> family.</p>

//     }

//   return (
//     <div className="card">
//       <div>
//         <Text
//           text={cards_info.text}
//           ptext={cards_info.ptext}
//           color={cards_info.color}
//           pcolor={cards_info.pcolor}
//           fontSize={cards_info.fontSize}
//           pfontSize={cards_info.pfontSize}

//        />
//       </div>

//       <div>
//         <img src={require('../assets/card-img1.png')} alt="pic here" />
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from "react";
import "../styles/SliderCards.css";

const SlideCards = () => {
  return (
    <>
      <div className="card">
        <div className="left-div">
          <h1>Creche-Montessori</h1>
          <p>
            The early years of a child’s education are <br /> ones of
            excitement, exploration, and <br /> discovery. A time when they are{" "}
            <br /> introduced to a world beyond the secure <br /> and familiar
            confines of home life, when <br /> they begin to make friends,
            experience <br />
            new play opportunities and interact with
            <br /> adults beyond those of their immediate
            <br /> family.
          </p>
        </div>

        <div className="right-div">
          <img src={require("../assets/card-img1.png")} alt="pic here" />
        </div>
      </div>
    </>
  );
};

export default SlideCards;
