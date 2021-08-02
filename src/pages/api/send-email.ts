import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

type sendEmailBody = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  if (method === "POST") {
    const { name, subject, message, email }: sendEmailBody = request.body;

    if(!name || !subject || !message || !email) {
      return response.status(400).json({ error: "Faltando request body" });
    }

    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } as {
      host: string;
    });

    const sendEmail = async () => await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      replyTo: email,
      text: `
        Nome: ${name},
        email: ${email},
        message: ${message}
      `,
    });

    try {
      await sendEmail();

      return response.status(200).json({
        message: "Email enviado com sucesso!",
      });
    } catch (error) {
      return response.status(400).json({
        message: "Erro ao enviar email",
        error,
      });
    }
  } else {
    return response.status(404).json({ error: "Rota não encontrada" });
  }
}
