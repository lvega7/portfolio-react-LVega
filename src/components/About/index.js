import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
          My name is is Lissette Vega and I am a junior software engineer. I am currently enrolled in a Full-stack bootcamp where I 
          am learning so many new things about the coding world. I have tackled HTML, CSS, Javascript, Node.js, express.js, React, SQL, and much more.
          This is my portfolio.
        </p>
      </div>
    </section>
  );
}

export default About;