import './ContactCss.css';

function Contact() {
  return (
    <section className="section my-section" id="contact">
      <div className="my-text">
        <h2 className="title is-size-1 has-text-white">CONTACT</h2>

        <p className="has-text-white is-size-4">
          If you want to reach me out, feel free to send me a message on
          LinkedIn! <br /> Click the icon below to do so
        </p>

        <img
          onClick={() =>
            window.open('https://www.linkedin.com/in/jesuslencina/')
          }
          className="my-linkedin"
          src="public-assets/linkedin.png"
          alt="LinkedIn"
        />
      </div>
    </section>
  );
}

export default Contact;
