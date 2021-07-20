import Head from "next/head";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

import { Navbar } from "../components/Navbar";
import { BlogAside } from "../components/BlogAside";
import { SkillCard } from "../components/SkillCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Footer } from "../components/Footer";

import { Background, Main, Container, MainArticle, Services, Skills, Portfolio, ContactBox, Testimonials } from "../styles/Home";

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

      <Main>
        <section>
          <MainArticle>
            <h1>
              <span>Olá, me chamo</span>
              Edvaldo Junior
            </h1>
            <p>
              Desenvolvedor fullstack contruindo sistemas com servidores, websites e aplicativos mobile todos integrando um único sistema
            </p>
          </MainArticle>

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
        </section>

        <BlogAside blogs={blogs} />
      </Main>

      <Background />

      <Skills>
        <Container>
          <SkillCard 
            title="NodeJS"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices dui nec mi vehicula rhoncus ut a risus."
            imgUrl="./images/nodejs-eddypbr-skills.png"
            color="#539E43"
          />

          <SkillCard 
            title="NextJS"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices dui nec mi vehicula rhoncus ut a risus."
            imgUrl="./images/nextjs-eddypbr-skills.png"
            color="#E44482"
          />

          <SkillCard 
            title="React"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices dui nec mi vehicula rhoncus ut a risus."
            imgUrl="./images/react-eddypbr-skills.png"
            color="#4DBCDF"
          />
        </Container>
      </Skills>

      <Container>
        <Portfolio>
          <article>
            <h1>Meu portfólio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices dui nec mi vehicula rhoncus ut a risus. Sed placerat tellus ut mi rhoncus, sit amet consectetur enim egestas. Nulla mi diam, posuere non tincidunt id, accumsan sed metus.</p>
            <Link href="#">
              <a>Ver portfólio</a>
            </Link>
          </article>

          <div>
            <img src="./images/guy.svg" alt="Redes sociais" />

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
          </div>
        </Portfolio>
      </Container>
    
      <ContactBox>
        <Container>
          <strong>Gostaria de fazer o orçamento do projeto da sua empresa, parcerias ou apenas conversar?</strong>
          <Link href="#">
            <a>Fale comigo!</a>
          </Link>
        </Container>
      </ContactBox>

      <Testimonials id="feedback">
        <h1>Feedback</h1>
        <p>Alguns depoimentos de colegas de trabalho e clientes que já participaram de projetos comigo ao longo da minha carreira como desenvolvedor.</p>

        <article>
          <TestimonialCard  imageUrl="https://avatars.githubusercontent.com/u/48658479?v=4" author="Edvaldo Junior" occupation="Desenvolvedor web" comment="Aliquam scelerisque, enim in ullamcorper venenatis, nibh urna laoreet ex, et laoreet nisi turpis quis nunc. Fusce condimentum dui at ligula tincidunt semper." />
          <TestimonialCard  imageUrl="https://avatars.githubusercontent.com/u/48658479?v=4" author="Edvaldo Junior" occupation="Desenvolvedor web" comment="Aliquam scelerisque, enim in ullamcorper venenatis, nibh urna laoreet ex, et laoreet nisi turpis quis nunc. Fusce condimentum dui at ligula tincidunt semper." />
          <TestimonialCard  imageUrl="https://avatars.githubusercontent.com/u/48658479?v=4" author="Edvaldo Junior" occupation="Desenvolvedor web" comment="Aliquam scelerisque, enim in ullamcorper venenatis, nibh urna laoreet ex, et laoreet nisi turpis quis nunc. Fusce condimentum dui at ligula tincidunt semper." />
          <TestimonialCard  imageUrl="https://avatars.githubusercontent.com/u/48658479?v=4" author="Edvaldo Junior" occupation="Desenvolvedor web" comment="Aliquam scelerisque, enim in ullamcorper venenatis, nibh urna laoreet ex, et laoreet nisi turpis quis nunc. Fusce condimentum dui at ligula tincidunt semper." />
        </article>
      </Testimonials>

      <Footer />
    </>
  );
}
