import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { blogs, BlogType } from "../data/blogs";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

import { SEO } from "../components/SEO";
import { Navbar } from "../components/Navbar";
import { BlogAside } from "../components/BlogAside";
import { SkillCard } from "../components/SkillCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Footer } from "../components/Footer";

import { Background, Main, Container, MainArticle, Services, Skills, Portfolio, ContactBox, Testimonials } from "../styles/Home";

export default function Home({ blogs }: { blogs: BlogType[] }) {
  return (
    <>
      <Head>
        <title>Início | EddyPBR</title>
        <SEO 
          title="EddyPBR website" 
          description="Desenvolvedor fullstack web e mobile - Trabalhando com Typescript, NodeJS, Next, React, React Native, Expo e mais!"
          url={process.env.NEXT_PUBLIC_BASE_URL}
          urlImage={`${process.env.NEXT_PUBLIC_BASE_URL}/public/eddypbr-cover.jpg`}
          type="website"
        />
      </Head>

      <Main>
        <section>
          <MainArticle>
            <h1>
              <span>Olá, me chamo</span>
              Edvaldo Junior
            </h1>
            <p>
              Desenvolvedor fullstack contruindo sistemas com servidores, websites e aplicativos mobile todos formando um único sistema.
            </p>
          </MainArticle>

          <Navbar />

          <Services>
            <div />
            <article>
              <h1>Meus serviços</h1>
              <p>
                Construção de sistemas completos definindo sua estrutura do 
                servidor e tabelas no banco-de-dados, elaborando uma interface 
                web para acesso do sistema e até mesmo um aplicativo mobile 
                para que seus usuários tenham em mãos o acesso ao seu sistema.
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
            text="Desenvolvimento de API’s com NodeJS + Typescript consumindo um banco de dados SQL ou NoSQL."
            imgUrl="./images/nodejs-eddypbr-skills.png"
            color="#539E43"
          />

          <SkillCard 
            title="NextJS"
            text="Desenvolvimento de websites e interfaces web utilizando o NextJS para otimizar o SEO do seu sistema."
            imgUrl="./images/nextjs-eddypbr-skills.png"
            color="#E44482"
          />

          <SkillCard 
            title="React native"
            text="Desenvolvimento de aplicativos mobile android e iOS para que seus clientes tenham seus sistemas em mãos."
            imgUrl="./images/react-eddypbr-skills.png"
            color="#4DBCDF"
          />
        </Container>
      </Skills>

      <Portfolio>
        <article>
          <h1>Meu portfólio</h1>
          <p>
            Conheça os projetos e sistemas que elaborei ao longo da minha 
            carreira como programador, embora vários de meus projetos sejam 
            privados e não possam ser mostrados, outros tem código aberto, 
            espero que goste!
          </p>
          <Link href="/portfolio">
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
    
      <ContactBox>
        <Container>
          <strong>Gostaria de fazer o orçamento do projeto da sua empresa, parcerias ou apenas conversar?</strong>
          <Link href="/contato">
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

export const getStaticProps: GetStaticProps = async () => {
  const tenRecentBlogs = blogs.slice(0, 10);
  const filteredDataBlogs = tenRecentBlogs.map((blog) => {
    return {
      title: blog.title,
      thumbnail: blog.thumbnail,
      url: blog.url,
    };
  })

  return {
    props: {
      blogs: filteredDataBlogs,
    },
  };
};
