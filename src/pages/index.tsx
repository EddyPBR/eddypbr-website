import Head from "next/head";

import { Navbar } from "../components/Navbar";

import { Background, Container, Main, Services } from "../styles/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | EddyPBR</title>
      </Head>

      <Background />

      <Container>
        <Main>
          <h1>
            <span>Olá, me chamo</span>
            Edvaldo Junior
          </h1>
          <p>
            Desenvolvedor fullstack contruindo sistemas com servidores, websites e aplicativos mobile todos integrando um único sistema
          </p>
        </Main>

        <Navbar />

        <Services>
          <div />
          <article>
            <h1>Meus serviços</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices 
              dui nec mi vehicula rhoncus ut a risus. Sed placerat tellus ut mi rhoncus, 
              sit amet consectetur enim egestas. Nulla mi diam, posuere non tincidunt id, 
              accumsan sed metus. Nullam feugiat eros at odio pretium dictum.
            </p>
          </article>
        </Services>

      </Container>
    </>
  );
}
