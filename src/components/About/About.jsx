import "./About.css";
import author from "../../assets/me.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__author-wrapper">
          <img
            src={author}
            alt="author image"
            className="about__author-image"
          />
        </div>
        <div className="about__author">
          <h2 className="about__author-title">About the author</h2>
          <p className="about__author-paragraph">*Text about the author*</p>
          <p className="about__author-paragraph-me">About me *coming soon*</p>
        </div>
      </div>
    </section>
  );
}

export default About;
