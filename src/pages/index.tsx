import Head from "next/head";

import SocialLinks from "../components/SocialLinks";
import SkillCard from "../components/SkillCard";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | EddyPBR</title>
      </Head>

      <main className={styles.presentation}>
        <div className={styles.content}>
          <div>
            <p>Olá, me chamo</p>
            <h1>Edvaldo Junior,</h1>
            <h2>
              Sou um desenvolvedor fullstack web e mobile, este é o meu site,
              espero que goste!
            </h2>

            <SocialLinks github instagram linkedin />
          </div>

          <div>
            <img src="./assets/desenvolvedor-e-computador.svg" alt="EddyPBR" />
          </div>
        </div>
      </main>

      <section className={styles.skill}>
        <h1>Minhas Habilidades</h1>
        <div>
          <SkillCard headerImage="./assets/server-ilustration.svg" title="API REST" text="Desenvolvimento de sistemas que podem ser integrados a interfaces ou não, como sistema de envio de emails." footerImage="./assets/typescript-nodejs.svg" />
          <SkillCard headerImage="./assets/website-ilustration.svg" title="WEBSITES" text="Websites para negócios ou interfaces via navegador para sistemas internos e tudo com responsividade." footerImage="./assets/react-nextjs.svg" />
          <SkillCard headerImage="./assets/server-ilustration.svg" title="APP's" text="Aplicativos mobile que podem ou não serem integrados com uma API, criando então uma interface mobile para o sistema." footerImage="./assets/react-native.svg" />
        </div>
      </section>
    </>
  );
}
