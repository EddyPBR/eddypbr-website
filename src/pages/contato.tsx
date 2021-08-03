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
          url={`${process.env.NEXT_PUBLIC_VERCEL_ENV}/contato`}
          urlImage={`${process.env.NEXT_PUBLIC_VERCEL_ENV}/public/eddypbr-cover.jpg`}
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
        <img src="./images/blob-contact-top.svg" alt="Fale com EddyPBR enviando um email" />
        <img src="./images/blob-contact-bottom.svg" alt="Fale com EddyPBR enviando um email" />
      </Blobs>

      <BackToHomeLink />
    </>
  )
}