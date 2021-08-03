import axios from "axios";

type sendEmailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

export const sendEmail = async ({ name, email, subject, message }: sendEmailParams) => await api.post("/api/send-email", {
  name,
  email,
  subject,
  message
});
