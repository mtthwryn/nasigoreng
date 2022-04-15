import React from "react";
import { Link } from "react-router-dom";
import discord from "../../assets/discord.png";
import insta from "../../assets/insta.png";
import "./Socials.css";

function Socials() {
  return (
    <div className="socials">
        <a target="_blank" href = "https://www.instagram.com/ucla.ssa">
            <img className = "social" src={insta}/>
        </a>
        <a target="_blank" href = "https://discord.com/invite/NNGb5EGtKs">
            <img className = "social" src={discord}/>
        </a>
    </div>
  );
}

export default Socials;