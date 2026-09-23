import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <textarea placeholder="Message"></textarea>
        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Contact;
