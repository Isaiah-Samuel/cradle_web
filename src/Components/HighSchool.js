import React from "react";
import "../styles/Schools.css";

export default function HighSchool() {
  return (
    <div className="high-school">
      <div className="requirement-main">
        <h1>
          Cradle High School is an <br /> exceptional educational <br />
          institution{" "}
        </h1>
      </div>
      {/* -------------------------------------- div1 */}
      <div className="requirement-body-author">
        <div className="requirement-author-img">
          <img src={require("../assets/odoma.png")} alt="Your Logo" />
        </div>

        <div className="requirement-author-txt">
          <div className="requirement-author-txt1">
            <h3>Gideon Odoma</h3>
          </div>

          <div style={{ display: "flex" }} className="requirement-author-txt2">
            <h4>Director Cradle High School</h4>
            <h5>10 min read</h5>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- div2 */}
      <div className="horz">
        <hr />
      </div>
      {/* -------------------------------------------------div3 */}
      <div className="body-content1">
        <h3 style={{ color: "#05022B" }}>
          Cradle High School is an exceptional educational institution that
          stands at the forefront of innovation and technology in the realm of
          education.
          <br />
          <br />
          <br /> As its name suggests, Cradle High School symbolizes a nurturing
          and supportive environment where students are encouraged to grow,
          explore, and reach their full potential. <br />
          <br />
          One of the distinguishing features of Cradle High School is its
          commitment to integrating smart boards and interactive boards into the
          learning process. .<br />
          <br />
          <br />
        </h3>

        <div className="board-img">
          <img src={require("..? /assets/interactiveB.png")} alt="Your Logo" />
        </div>
        <h4
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "48px",
            color: "#0B0746",
          }}
        >
          Interactive smart boards
        </h4>
        <div className="body-content2">
          <h3 style={{ color: "#05022B", fontWeight: "400" }}>
            These cutting-edge technologies have transformed the traditional
            classroom setting, providing an immersive and engaging experience
            for both students and teachers alike. By utilizing smart boards,
            Cradle High School has successfully created an interactive learning
            environment that fosters collaboration, critical thinking, and
            creativity. <br></br>
            <br></br>
            The smart boards at Cradle High School are equipped with advanced
            features that enable teachers to present information in dynamic and
            captivating ways. With a touch of a finger or a stylus, educators
            can effortlessly annotate and illustrate concepts, making abstract
            ideas more tangible and accessible to students. <br></br>
            <br></br> This interactive approach not only enhances students'
            understanding but also encourages active participation, as they can
            directly interact with the content displayed on the board.Moreover,
            the integration of interactive boards at Cradle High School offers
            endless possibilities for customization and personalization.
            <br></br>
            <br></br>
          </h3>
          <div className="line-text">
            <div class="vertical-line"></div>
            <div className="line-text-text">
              <h5>
                Students can actively contribute to the learning process by
                sharing their ideas, solving problems collaboratively, and
                engaging in interactive activities.{" "}
              </h5>
            </div>
          </div>

          <div className="body-content3">
            <h3 style={{ color: "#05022B", fontWeight: "400" }}>
              This interactive learning experience fosters a sense of ownership
              and empowerment, allowing students to take charge of their
              education and become active learners.
              <br />
              <br />
              Cradle High School recognizes that technology is not an end in
              itself but rather a tool to enhance and enrich the learning
              journey. While smart boards and interactive boards play a pivotal
              role in the classroom, they are complemented bya comprehensive
              curriculum, highly qualified educators, and a supportive school
              community. <br />
              <br />
              The school prioritizes the holistic development of students,
              emphasizing not only academic excellence but also the nurturing of
              character,leadership skills, and social responsibility.Beyond its
              focus on technology, Cradle High School is dedicated to creating a
              positive and inclusive environment.
              <br />
              <br /> The school fosters a culture of respect,empathy, and
              diversity, encouraging students from different backgrounds to
              embrace their unique perspectives and learn from one another.
            </h3>
          </div>

          <div className="line-text2">
            <div class="vertical-line"></div>
            <div className="line-text-text2">
              <h5>
                This commitment to inclusivity ensures that every student feels
                valued and supported, enabling them to thrive academically,
                socially, and emotionally..{" "}
              </h5>
            </div>
          </div>

          <div className="body-content4">
            <h3 style={{ color: "#05022B", fontWeight: "400" }}>
              Cradle High School stands as a beacon of educational excellence,
              where the integration of smart boards and interactive boards has
              revolutionized the learning experience.
              <br />
              <br /> By embracing these innovative technologies and fostering a
              nurturing environment, the school prepares students to become
              lifelong learners, equipped with the skills, knowledge, and
              adaptability needed to succeed in a rapidly evolving world.
            </h3>
          </div>
          {/* ----------------- */}
        </div>
      </div>
    </div>
  );
}
