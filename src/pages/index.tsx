import Head from "next/head";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import SocialLinks from "../components/SocialLinks";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.presentation}>
      <Head>
        <title>Início | EddyPBR</title>
      </Head>

      <div className={styles.content}>
        <div>
          <p>Olá, me chamo</p>
          <h1>Edvaldo Junior,</h1>
          <h2>Sou um desenvolvedor fullstack web e mobile, este é o meu site, espero que goste!</h2>
          
          <SocialLinks github instagram linkedin />
        </div>

        <div>
          <img src="./assets/desenvolvedor-e-computador.svg" alt="EddyPBR" />
        </div>

      </div>
    </main>
  );
}
