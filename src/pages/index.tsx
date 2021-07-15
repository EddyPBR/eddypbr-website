import Head from "next/head";

import { Navbar } from "../components/Navbar";

import { Header, Container } from "../styles/Home";

export default function Home() {
  return (
    <Header>
      <Head>
        <title>Início | EddyPBR</title>
      </Head>
      <Container>
        <main>
          <h1>
            <span>Olá, me chamo</span>
            Edvaldo Junior
          </h1>
          <p>
            Desenvolvedor fullstack contruindo sistemas com servidores, websites e aplicativos mobile todos integrando um único sistema
          </p>
        </main>

        <Navbar />
      </Container>
    </Header>
  );
}
