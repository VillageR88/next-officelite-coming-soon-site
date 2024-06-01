'use server';

import nodemailer from 'nodemailer';
import { ErrorData } from '@/app/_lib/interfaces';

export async function CreateInvoiceContactForm(
  prev: { errorData: ErrorData; number: number },
  formData: FormData,
): Promise<{ errorData: ErrorData; number: number }> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  if (!process.env.EMAIL) return prev;
  const email = formData.get('email') as string;
  if (!email || !/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(email))
    return {
      errorData: {
        email: true,
        company: prev.errorData.company,
        name: prev.errorData.name,
        phone: prev.errorData.phone,
      },
      number: prev.number + 1,
    };
  const htmlContent = `Hello!<br/><br/>Thank you for contacting us. We will get back to you as soon as possible.<br/><br/> If you received this email by mistake, please ignore it.<br/><br/>Best regards,<br/><br/><a href="https://www.frontendmentor.io/profile/VillageR88">VillageR88</a><br/>`;
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Contact Form',
    html: htmlContent,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error('there was an error: ', err);
        reject(err);
      } else {
        resolve(null);
      }
    });
  });
  return { errorData: { email: false, company: false, name: false, phone: false }, number: prev.number + 1 };
}
