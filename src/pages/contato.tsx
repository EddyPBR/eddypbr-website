import Head from "next/head";
import { useState, FormEvent } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { sendEmail } from "../services/api";

import { SEO } from "../components/SEO";
import { BackToHomeLink } from "../components/BackToHomeLink";

import { Contact, Form, Blobs } from "../styles/Contato";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function checkIfIsEmpty(values: string[]) {
    const checkedValues = values.map((value => value.trim() !== "" ? true : false ));
    return !checkedValues.includes(false) ? true : false;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    if( !checkIfIsEmpty([name, email, subject, message]) ) {
      alert("É necessário que todos os campos sejam preenchidos");
    }

    const payload = { name, email, subject, message };

    try {
      await sendEmail(payload);
      alert("Email enviado com sucesso!");
    } catch {
      alert("Falha ao enviar o email :( - por favor tente novamente!");
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <>
      <Head>
        <title>Contato | EddyPBR</title>
        <SEO 
          title="EddyPBR - Entre em contato comigo!" 
          description="Desenvolvedor fullstack web e mobile - Entre em contato comigo!"
          url={`${process.env.NEXT_PUBLIC_VERCEL_URL}/contato`}
          urlImage={`${process.env.NEXT_PUBLIC_VERCEL_URL}/eddypbr-cover.jpg`}
          type="website"
        />
      </Head>

      <Contact>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu nome" onChange={(event) => setName(event.target.value)} />
          <input type="text" placeholder="Seu email" onChange={(event) => setEmail(event.target.value)} />
          <input type="text" placeholder="Assunto" onChange={(event) => setSubject(event.target.value)} />
          <textarea placeholder="Mensagem" onChange={(event) => setMessage(event.target.value)} />
          <button type="submit" disabled={isLoading}>
            { 
              isLoading 
                ? <AiOutlineLoading3Quarters />
                : "Enviar email"
            }
          </button>
        </Form>

        <div>
          <h1>Vamos conversar?</h1>
          <img src="./images/email.svg" alt="Fale com EddyPBR enviando um email" />
        </div>
      </Contact>

      <Blobs>
        <svg width="641" height="431" viewBox="0 0 641 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M211.388 -283.911C283.949 -278.455 315.255 -189.312 374.18 -146.617C421.695 -112.189 484.301 -104.054 521.845 -58.9612C567.093 -4.61526 619.899 61.4496 604.967 130.572C590.037 199.685 505.466 223.734 451.028 268.857C401.587 309.838 363.204 365.543 301.223 382.343C234.21 400.508 153.649 406.93 98.8277 364.324C44.9648 322.464 65.569 236.103 34.7469 175.246C2.82432 112.217 -81.9562 75.9316 -83.0146 5.28729C-84.0918 -66.6121 -21.7611 -122.138 29.5365 -172.529C81.5183 -223.592 138.726 -289.374 211.388 -283.911Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="216.281" y1="-287.062" x2="306.95" y2="385.378" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6C63FF"/>
              <stop offset="1" stopColor="#E3216D"/>
            </linearGradient>
          </defs>
        </svg>
        
        <svg width="597" height="375" viewBox="0 0 597 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M328.388 48.089C400.949 53.5447 432.255 142.688 491.18 185.383C538.695 219.811 601.301 227.946 638.845 273.039C684.093 327.385 736.899 393.45 721.967 462.572C707.037 531.685 622.466 555.734 568.028 600.857C518.587 641.838 480.204 697.543 418.223 714.343C351.21 732.508 270.649 738.93 215.828 696.324C161.965 654.464 182.569 568.103 151.747 507.246C119.824 444.217 35.0438 407.932 33.9854 337.287C32.9082 265.388 95.2389 209.862 146.536 159.471C198.518 108.408 255.726 42.6259 328.388 48.089Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="333.281" y1="44.9384" x2="423.95" y2="717.378" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6C63FF"/>
              <stop offset="1" stopColor="#E3216D"/>
            </linearGradient>
          </defs>
        </svg>
      </Blobs>

      <BackToHomeLink />
    </>
  )
}