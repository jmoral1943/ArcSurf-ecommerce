import React from "react";
import ocean from "../../assets/png/contact1.jpeg";
import pin from "../../assets/images/location2.svg";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/drawer.svg";

const Contact = () => (
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
            src={email}
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
      <h1 className="c-form__title">Send Us A Message</h1>
      <p className="c-form__text">
        At Arc Surf we are not only surfers who want to spread the love of the
        ocean and surfing. We also have a deep care for our customers and what
        they say whether it be good or bad we want to hear it.
      </p>
      <form className="">
        <label htmlFor="firstname">
          <span className="c-form__labels">First Name* </span> <input id="firstname" type="text" name="firstname" className="c-form__input"/>
        </label>
        <label  htmlFor="lastname">
          <span className="c-form__labels">Last Name* </span> <input id="lastname" type="text" name="lastname" className="c-form__input"/>
        </label>
        <label  htmlFor="email">
          <span className="c-form__labels">Email* </span> <input id="email" type="email" name="email" className="c-form__input"/>
        </label>
        <label  htmlFor="phonenumber">
          <span className="c-form__labels">Phone Number </span> <input id="phonenumber" type="text" name="phonenumber" className="c-form__input"/>
        </label>
        <label  htmlFor="ordernumber">
          <span className="c-form__labels">Order Number</span> <input id="ordernumber" type="text" name="ordernumber" className="c-form__input"/>
        </label>
        <label  htmlFor="concern">
          <span className="c-form__labels">Your concern*</span> <input id="concern" type="text" name="concern" className="c-form__input"/>
        </label>
        <label>
          <span className="c-form__labels">Comments</span><textarea></textarea>
        </label>
        <button className="c-form__submit"><span></span>Submit</button>
      </form>
    </div>
  </div>
);
export default Contact;
