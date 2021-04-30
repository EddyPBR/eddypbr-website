import Head from "next/head";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import SocialLinks from "../components/SocialLinks";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.presentation}>
      <main>
        <Head>
          <title>Início | EddyPBR</title>
        </Head>
        
        <div>
          <p>Olá, me chamo</p>
          <h1>Edvaldo Junior,</h1>
          <h2>Sou um desenvolvedor fullstack web e mobile, este é o meu site, espero que goste!</h2>
          
          <SocialLinks github instagram linkedin />
        </div>

        <div>
          <img src="./assets/desenvolvedor-e-computador.svg" alt="EddyPBR" />
        </div>

      </main>
    </div>
  );
}
