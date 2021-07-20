import Head from "next/head";
import { useState, FormEvent } from "react";

import { Contact, Form } from "../styles/Contato";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function checkIfIsEmpty(values: string[]) {
    const checkedValues = values.map((value => value.trim() !== "" ? true : false ));
    return !checkedValues.includes(false) ? true : false;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if( !checkIfIsEmpty([name, email, subject, message]) ) {
      alert("É necessário que todos os campos sejam preenchidos");
    }

    console.log("Pronto para ser enviado!");
  }

  return(
    <>
      <Head>
        <title>Contato | EddyPBR</title>
      </Head>

      <Contact>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu nome" onChange={(event) => setName(event.target.value)} />
          <input type="text" placeholder="Seu email" onChange={(event) => setEmail(event.target.value)} />
          <input type="text" placeholder="Assunto" onChange={(event) => setSubject(event.target.value)} />
          <textarea placeholder="Mensagem" onChange={(event) => setMessage(event.target.value)} />
          <button type="submit">Enviar email</button>
        </Form>

        <div>
          <h1>Vamos conversar?</h1>
          <img src="./images/email.svg" alt="Fale com EddyPBR enviando um email" />
        </div>
      </Contact>
    </>
  )
}