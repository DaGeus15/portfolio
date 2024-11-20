import React from "react";
const Testimonials = () => {
  return (
    <section>
      <h2 className="h2">About Me</h2>
      <div className="container">
        <ol className="testimonials">
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Dayle is a highly responsible person who takes ownership of their
              work. They are quick to learn new technologies and always strive
              to improve with each project.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/rich-harris.png"
                alt="Rich Harris"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Rich Harris</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Dayle has a great ability to adapt quickly to new environments and
              technologies. Their responsible approach ensures they take on
              projects with confidence and efficiency.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/frank-mcsherry.webp"
                alt="Frank McSherry"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Frank McSherry</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Dayle is self-driven and proactive, always eager to improve and
              find innovative solutions to challenges.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/brian-hirsh.png"
                alt="Brian Hirsh"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Brian Hirsh</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Working with Dayle is always a positive experience. They have an
              amazing ability to learn quickly and deliver high-quality results.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/adam.png"
                alt="Adam Argalye"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Adam Argalye</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Dayle is a very detail-oriented person, always making sure the
              project is not only functional but also well-optimized. I enjoy
              collaborating with them.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/val-head.png"
                alt="Kelly Jones"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Kelly Jones</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Dayle is always up for a challenge and delivers results on time.
              Their quick learning and strong work ethic make them a valuable
              asset to any team.
            </blockquote>
            <figure className="testimonial-author">
              <img
                src="assets/images/testimonials/tim-satterwhite.webp"
                alt="Mike Smith"
                loading="lazy"
              />
              <figcaption>
                <h3 className="testimonial-author-name">Mike Smith</h3>
                <p className="testimonial-author-job">Developer</p>
              </figcaption>
            </figure>
          </li>
        </ol>
      </div>
    </section>
  );
};
export default Testimonials;
