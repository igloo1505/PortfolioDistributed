import React, { useState, useEffect } from "react";
import Axios from "axios";
import M from "materialize-css/dist/js/materialize.min";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    props.setPath("/contact");
    console.log(props.curPath);
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      M.toast({ html: "Oh no. Please fill this out completely!" });
    } else {
      let submission = { name, email, message };
      const res = await Axios.post("/contactInput", submission, config);
      console.log(`submission: ${submission}`);
      console.log(`response: ${res}`);
      M.toast({ html: `Thank you! ${name} ` });
      console.log("submitted");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1500);
    }
  };
  return (
    <div className="row formRow cardStyle">
      <form onSubmit={onSubmit}>
        <div className="row mobileRow">
          <div
            className="input-field col s12 m6 mobileAdjust"
            style={{ marginTop: "50px" }}
          >
            <i className="material-icons prefix formIcon">account_circle</i>
            <input
              id="name"
              type="text"
              value={name}
              className="validate formMobileAdjustInput"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">
              <p className="formMobileAdjust">Name</p>
            </label>
          </div>

          <div
            className="input-field mobileAdjust col s12 m6"
            style={{ marginTop: "50px" }}
          >
            <i className="material-icons prefix formIcon">mail</i>
            <input
              id="email"
              value={email}
              type="email"
              className="validate formMobileAdjustInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">
              <p className="formMobileAdjust">Email</p>
            </label>
          </div>
        </div>
        <div
          className="row mobileTweak"
          style={{ margin: "auto", maxWidth: "95%", marginTop: "50px" }}
        >
          <div className="input-field col s12">
            <textarea
              id="message"
              className="materialize-textarea formMobileAdjust"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label htmlFor="message">
              <p className="formMobileAdjustMessage">How can I help?</p>
            </label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light cyan accent-4 formSubmitBtn"
          type="submit"
          name="submit"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <p className="submitContactMobile">Submit</p>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
