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
          url={process.env.NEXT_PUBLIC_VERCEL_URL}
          urlImage={`${process.env.NEXT_PUBLIC_VERCEL_URL}/eddypbr-cover.jpg`}
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
              Desenvolvedor fullstack construindo sistemas com servidores, websites e aplicativos mobile todos formando um único sistema.
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
            imgUrl="/images/nodejs-eddypbr-skills.png"
            color="#539E43"
          />

          <SkillCard 
            title="NextJS"
            text="Desenvolvimento de websites e interfaces web utilizando o NextJS para otimizar o SEO do seu sistema."
            imgUrl="/images/nextjs-eddypbr-skills.png"
            color="#E44482"
          />

          <SkillCard 
            title="React native"
            text="Desenvolvimento de aplicativos mobile android e iOS para que seus clientes tenham seus sistemas em mãos."
            imgUrl="/images/react-eddypbr-skills.png"
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
          <img src="/images/guy.svg" alt="Redes sociais" width={230} height={378} loading="lazy" />

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
          <TestimonialCard  imageUrl="/images/testimonial/felix-vicente.webp" author="Félix Vicente" occupation="Desenvolvedor - Agência Ellis" comment="Trabalhei com Edvaldo em diversos projetos, ele sempre cuidou muito bem da transparência com o cliente e desenvolveu interfaces incríveis!" />
          <TestimonialCard  imageUrl="/images/testimonial/jonatas-elyon.webp" author="Jonatas Elyon" occupation="Diretor de crm - Braiscompany" comment="Fundei junto a Edvaldo uma Startup, juntos elaboramos diversos projetos e todos elogiados por nossos clientes, o cara é fera!" />
          <TestimonialCard  imageUrl="/images/testimonial/jhonny-porto.webp" author="Jhonny Porto" occupation="Cantor e compositor" comment="Seu trabalho é excepcional, Edvaldo sempre me atendeu muito bem e criou um belíssimo site moderno tudo que um cantor como eu precisa." />
          <TestimonialCard  imageUrl="/images/testimonial/lucas-andrade.webp" author="Lucas Andrade" occupation="UI design - Freelancer" comment="Criei diversas interfaces para projetos juntos com Edvaldo e em todos Edvaldo sempre se manteve muito fiel e com grandes sacadas em animações!" />
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
