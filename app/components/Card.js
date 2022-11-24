import Image from "next/image";
import React from "react";
import "../../styles/card/card.css";



function Card({ pic, title, text }) {
  return (
    <div className="wrapper">
      <Image src={pic} width={60} height={60} alt="img" />
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
}

export default Card;
