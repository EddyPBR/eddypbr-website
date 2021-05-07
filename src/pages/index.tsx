import Head from "next/head";

import SocialLinks from "../components/SocialLinks";
import SkillCard from "../components/SkillCard";
import Project from "../components/Project";
import Carousel from "../components/Carousel";

import { AiFillFileText } from "react-icons/ai";

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

            <SocialLinks github="https://github.com/EddyPBR/" instagram="https://www.instagram.com/edvaldo_junior_dev/" linkedin="https://www.linkedin.com/in/edvaldojuniordev/" />
          </div>

          <div>
            <img src="./assets/desenvolvedor-e-computador.svg" alt="EddyPBR" />
          </div>
        </div>
      </main>

      <article className={styles.about}>
        <h1>Sobre mim</h1>
        <p>Meu nome é Edvaldo Junior tenho estudado programação desde o início de 2017 e me apaixonei no meu primeiro "Hello world", desde então sempre tento aprender coisas novas relacionadas ao desenvolvimento de softwares, e nunca parei de estudar sobre.</p>
        <p>No passar dos anos eu iniciei vários projetos remunerados e não remunerados,  e fui adquirindo experiência não somente com a programação, mas com o atendimento ao clientes, abstração e resolução dos problemas deles, mas as coisas tomaram um novo rumo quando foquei na MERN STACK.</p>
        <p>Com a MERN STACK eu comecei elaborar sistemas completos com backend, frontend e mobile todos se comunicando fazendo parte de um mesmo sistema, e isso com velocidade, o que me proporcionou reconhecimento profissional.</p>
        <p>Atualmente não somente atuo como freelancer, mas também tenho um trabalho fixo na empresa Rally Motos uma das maiores distribuidoras e importadoras de moto peças do Brasil e tem sido uma experiencia incrível trabalhar com eles.</p>
        <p>Sem mais, ainda estou aberto a projetos novos com/sem fins lucrativos, e estou disposto a ajudar a comunidade de desenvolvedores a evoluirem, então se ficou interessado, entra em contato podemos conversar sempre para espandirmos nossos horizontes.</p>
      </article>

      <section className={styles.skill}>
        <h1>Minhas Habilidades</h1>
        <div>
          <ul className={styles.listSkills}>
            <li>
              <SkillCard headerImage="./assets/server-ilustration.svg" title="API REST" text="Desenvolvimento de sistemas que podem ser integrados a interfaces ou não, como sistema de envio de emails." footerImage="./assets/typescript-nodejs.svg" />
            </li>
            <li>
              <SkillCard headerImage="./assets/website-ilustration.svg" title="WEBSITES" text="Websites para negócios ou interfaces via navegador para sistemas internos e tudo com responsividade." footerImage="./assets/react-nextjs.svg" />
            </li>
            <li>
              <SkillCard headerImage="./assets/server-ilustration.svg" title="APP's" text="Aplicativos mobile que podem ou não serem integrados com uma API, criando então uma interface mobile para o sistema." footerImage="./assets/react-native.svg" />
            </li>
          </ul>
        </div>
      </section>
    
      <div className={styles.box}>
        <b>Gostaria de conhecer melhor meu currículo e experiência?</b>
        <a href="https://docs.google.com/document/d/1QjWrx93R_4-dgaksFqHBpHem5Do2PfaaMmXEGV8NcLM/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
          <AiFillFileText size={22} />
          Acessar currículo
        </a>
      </div>

      <section className={styles.projects}>
        <h1>Projetos</h1>
        <p>Conheça alguns dos projetos que desenvolvi durante meus anos como desenvolvedor, caso tenha o ícone do github, sinta-se livre para testar o projeto em sua máquina.</p>

        <Carousel>
          <Project title="Mural digital" text="Na Rally Motos importadora e distribuidora, os avisos são colocados em uma página web e tambem no aplicativo da própria empresa para disponibilizar novos assuntos como conquistas, metas batidas, aniversáriantes e afins." image="/assets/mural-digital.jpg" github="https://github.com/EddyPBR/mural-digital" website="https://www.rallymotosmural.ml/" />
          <Project title="Project Advisor 3000" text="O Project Advisor 3000 consiste em uma plataforma de gerenciamento de projetos com etapas que devem ser alcançadas o usuário realiza o cadastro cria seus projetos e estipula as etapas que devem ser alcançadas." image="/assets/project-advisor-3000.jpg" github="https://github.com/EddyPBR/project-advisor-3000/" />
          <Project title="Move.it" text="O projeto consiste em um contador de 25 minutos, quando o contador finaliza o tempo é mostrado um desafio de relaxamento corporal ou visual, onde o usuário pode ou não completa-lo." image="/assets/move-it.jpg" github="https://github.com/EddyPBR/move-it/" website="https://move-it-eddypbr.vercel.app/" />
        </Carousel>
      </section>
    </>
  );
}
