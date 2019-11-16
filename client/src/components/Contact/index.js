import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { withRouter } from "react-router-dom";

import ocean from "../../assets/png/contact1.jpeg";
import pin from "../../assets/images/location2.svg";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/drawer.svg";
import ThankYou from "./ThankYou";

const Contact = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [subjectLine, setSubjectLine] = useState();
  const [order_id, setOrderId] = useState(null);
  const [email, setEmail] = useState();
  const [formData, setFormData] = useState();

  const [submited, setSubmission] = useState(false);

  const setFalse = (type) => {
    if (type === "firstName") {
    setFirstName();
    } else if (type === "lastName") {
      setLastName();
    } else if (type === "concern") {
      setSubjectLine();
    } else if (type === "comments") {
      setFormData();
    } else if (type === 'email') {
      setEmail()
    }
  };
  const handleValidation = (e, type) => {
    if (type === "email") {
      if (!validator.isEmail(e.target.value)) {
        e.target.classList.add("c-invalid__input");
        document.querySelector(".c-invalid__message--email").style.visibility =
          "unset";
        setFalse(type);
      } else {
        e.target.classList.remove("c-invalid__input");
        e.target.nextSibling.style.visibility = "hidden";
        setEmail(e.target.value);
      }
    } else {
      if (validator.isEmpty(e.target.value)) {
        e.target.classList.add("c-invalid__input");
        e.target.nextSibling.style.visibility = "unset";
        setFalse(type);
      } else {
        e.target.classList.remove("c-invalid__input");
        e.target.nextSibling.style.visibility = "hidden";
        if (type === "firstName") {
          setFirstName(e.target.value);
        } else if (type === "lastName") {
          setLastName(e.target.value);
        } else if (type === "concern") {
          setSubjectLine(e.target.value);
        } else if (type === "comments") {
          setFormData(e.target.value);
        }
      }
    }
  };
  const handleOrderNumber = e => {
    setOrderId(e.target.value);
  };

  const handleSubmit = e => {
    if (!firstName || !lastName || !subjectLine || !email || !formData) {
      alert("You need to fill in the required fields");
      e.preventDefault();
      return;
    }

    axios
      .post("/api/contact", {
        firstName,
        lastName,
        subjectLine,
        order_id,
        email,
        form: formData
      })
      .then(res => {
        setSubmission(true)
      });
    e.preventDefault();
  };

  return (
    <div className="c-contact">
      <div className="c-contact__background">
        <img src={ocean} alt="ocean shore" className="c-contact__image" />
        <div className="c-contact-information">
          <div className="c-contact__information c-contact__information--address">
            <img
              src={pin}
              alt="location pin"
              className="c-conatact-information__icon"
            />
            <div>
              <h2 className="c-contact-information__title">Address</h2>
              <p className="c-contact-information__text">
                117 Waterworks Way Irvine, California 92618
              </p>
            </div>
          </div>
          <div className="c-contact__information c-contact__information--phone">
            <img
              src={phone}
              alt="Phone icon"
              className="c-conatact-information__icon"
            />
            <div>
              <h2 className="c-contact-information__title">Call us</h2>
              <p className="c-contact-information__text">(777)777-7777</p>
            </div>
          </div>
          <div className="c-contact__information c-contact__information--email">
            <img
              src={mail}
              alt="Email"
              className="c-conatact-information__icon"
            />
            <div>
              <h2 className="c-contact-information__title">Email</h2>
              <p className="c-contact-information__text">support@arcsurf.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-form">

      {submited ? (
        <ThankYou />
      ) : (
        <>
          <h1 className="c-form__title">Send Us A Message</h1>
          <p className="c-form__text">
            At Arc Surf we are not only surfers who want to spread the love of
            the ocean and surfing. We also have a deep care for our customers
            and what they say whether it be good or bad we want to hear it.
          </p>
          <form className="">
            <label htmlFor="firstname" className="c-contact__label">
              <span className="c-form__labels">First Name* </span>
              <input
                id="firstname"
                type="text"
                name="firstname"
                className="c-form__input"
                onFocus={e => handleValidation(e, "firstName")}
                onChange={e => handleValidation(e, "firstName")}
              />
              <span className="c-invalid__message c-invalid__message--firstName">
                Fill out your first name correcly
              </span>
            </label>
            <label htmlFor="lastname" className="c-contact__label">
              <span className="c-form__labels">Last Name* </span>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="c-form__input"
                onFocus={e => handleValidation(e, "lastName")}
                onChange={e => handleValidation(e, "lastName")}
              />
              <span className="c-invalid__message c-invalid__message--lastName">
                Fill out your last name correcly
              </span>
            </label>
            <label htmlFor="email" className="c-contact__label">
              <span className="c-form__labels">Email* </span>
              <input
                id="email"
                type="email"
                name="email"
                className="c-form__input"
                onFocus={e => handleValidation(e, "email")}
                onChange={e => handleValidation(e, "email")}
              />
              <span className="c-invalid__message c-invalid__message--email">
                Make sure to provide an email
              </span>
            </label>

            <label htmlFor="ordernumber" className="c-contact__label">
              <span className="c-form__labels">Order Number</span>
              <input
                id="ordernumber"
                type="text"
                name="ordernumber"
                className="c-form__input"
                onChange={handleOrderNumber}
              />
            </label>
            <label htmlFor="concern" className="c-contact__label">
              <span className="c-form__labels">Your concern*</span>
              <input
                id="concern"
                type="text"
                name="concern"
                className="c-form__input"
                onFocus={e => handleValidation(e, "concern")}
                onChange={e => handleValidation(e, "concern")}
              />
              <span className="c-invalid__message c-invalid__message--concern">
                What would you like for us to talk about
              </span>
            </label>
            <label htmlFor="comments" className="c-contact__label">
              <span className="c-form__labels">Comments *</span>
              <textarea
                id="comments"
                onChange={e => handleValidation(e, "comments")}
                onFocus={e => handleValidation(e, "comments")}
              ></textarea>
              <span className="c-invalid__message c-invalid__message--comments">
                What do you have to say?
              </span>
            </label>
            <input
              type="submit"
              className="c-form__submit"
              onClick={e => handleSubmit(e)}
              values="Submit"
            />
          </form>
        </>
      )}
      </div>
    </div>
  );
};
export default withRouter(Contact);
