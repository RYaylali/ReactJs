import React from "react";
import Banner from "../assets/menu.jpg";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz"
          />
          <label>Email</label>
          <input type="email" name="email" placeholder="Lütfen Email giriniz" />
          <label>Mesaj</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz"
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
