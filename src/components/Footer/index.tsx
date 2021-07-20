import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa";

import { Foot } from "./styles";

export function Footer() {
  return (
    <Foot>
      <article>
        <div>
          <strong>Criado com <FaHeart /> por EddyPBR</strong>
        </div>
        <div>
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </article>
    </Foot>
  );
}