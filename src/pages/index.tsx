import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { BlogAside } from "../components/BlogAside";

import { Background, Container, Main, Services } from "../styles/Home";

export default function Home() {
  const blogs = [
    {
      title: "Letmeask com nextjs e pwa",
      url: "#",
      imgUrl: "https://cdn.dribbble.com/users/1647667/screenshots/9849363/media/01890923f178ea5693c3816aa0bc65e2.jpg?compress=1&resize=400x300"
    },
    {
      title: "Responsividade em websites",
      url: "https://cdn.dribbble.com/users/2394908/screenshots/10514933/tech-illustration-3_4x.jpg",
      imgUrl: "https://miro.medium.com/max/1400/1*oOMC3paQGiHIXguk2Yg4ug.jpeg"
    },
    {
      title: "Ecommerce no brasil em meio a crise da covid-19",
      url: "#",
      imgUrl: "https://png.pngtree.com/illustration/20190226/ourmid/pngtree-technology-high-tech-purple-2-5d-plug-image_8259.jpg"
    },
    {
      title: "Ultimo blog para teste",
      url: "#",
      imgUrl: "https://media.istockphoto.com/vectors/internet-vector-id495919527?k=6&m=495919527&s=612x612&w=0&h=mm15_NrkJQWUoQwr5FmLV9ge99S0tH4Wcq4xOx770YI="
    }
  ];

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

        <BlogAside blogs={blogs} />

      </Container>
    </>
  );
}
