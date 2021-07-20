import { FaHeart, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { Foot } from "./styles";

export function Footer() {
  return (
    <Foot>
      <article>
        <div>
          <strong>Criado com <FaHeart /> por EddyPBR</strong>
        </div>
        <div>
          <a href="https://www.facebook.com/eddypbr/" rel="noopener noreferrer" target="_blank">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/eddy_pbr/" rel="noopener noreferrer" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/eddypbr/" rel="noopener noreferrer" target="_blank">
            <FaLinkedinIn />
          </a>

          <a href="https://github.com/eddypbr" rel="noopener noreferrer" target="_blank">
            <FaGithub />
          </a>
        </div>
      </article>
    </Foot>
  );
}