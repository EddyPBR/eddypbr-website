import styles from "./home.module.scss";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div className={styles.presentation}>
      <main>
        
        <div>
          <p>Olá, me chamo</p>
          <h1>Edvaldo Junior,</h1>
          <h2>Sou um desenvolvedor fullstack web e mobile, este é o meu site, espero que goste!</h2>
          
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://github.com/EddyPBR/" rel="noopener noreferrer" target="_blank">
                <FiGithub size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/edvaldo_junior_dev/" rel="noopener noreferrer" target="_blank">
                <FiInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://github.com/EddyPBR" rel="noopener noreferrer" target="_blank">
                <FiLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img src="./assets/desenvolvedor-e-computador.svg" alt="EddyPBR" />
        </div>

      </main>
    </div>
  );
}
