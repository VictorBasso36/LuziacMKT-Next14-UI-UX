import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface Data {
  name?: string;
  company?: string;
  acting?: string;
  tel?: number;
  email?: string; // Corrigido para string para ser mais flexível
}

export async function POST(req: NextRequest, res: NextResponse) {
  const dataItems = await req.json();
  console.log("@Contact", dataItems);
  const items = dataItems;
  console.log("@links", items);

  try {
    // --- 1. Lógica de envio de e-mail (existente) ---
    const transporter = nodemailer.createTransport({
      service: "SMTP",
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USR,
        pass: process.env.PASS,
      },
    });

    const mailOption = {
      from: "Guilherme@luziac.com.br",
      to: "Guilherme@luziac.com.br,",
      subject: `Contato via site - ${items?.name || items?.data?.name} da ${
        items?.data?.company || items?.data?.acting || items?.acting
      }`,
      html: `
                <h3>Contato via site</h3>
                <li> Nome: ${items?.data?.name || items?.name}</li>
                <li> Empresa: ${items?.data?.company || items?.company}</li>
                <li> Telefone: ${items?.data?.tel || items?.tel}</li>
                <li> Atuação: ${items?.data?.acting || items?.acting}</li>
                <li> Email: ${items?.data?.email || items?.email}</li>
            `,
    };

    await transporter.sendMail(mailOption);
    console.log("Email sent successfully.");

    // --- 2. Lógica para enviar o Webhook (adicionada) ---
    const webhookUrl = process.env.BOTCONVERSA || "";

    // Enviar a requisição para o webhook
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append(
      "name-luziac-site",
      items?.data?.name || items?.name || ""
    );
    urlEncodedData.append(
      "company-luziac-site",
      items?.data?.company || items?.company || ""
    );
    urlEncodedData.append(
      "tel-luziac-site",
      String(items?.data?.tel || items?.tel || "").trim()
    );
    urlEncodedData.append(
      "email-luziac-site",
      items?.data?.email || items?.email || ""
    );

    console.log("Sending webhook with data:", urlEncodedData.toString());

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      // MUDANÇA 2: Definir o header correto para este formato
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
    });

    console.log("webhook form data", webhookResponse);

    // Verifica se a chamada ao webhook foi bem-sucedida
    if (!webhookResponse.ok) {
      // Se falhar, lança um erro para ser pego pelo bloco catch
      throw new Error(`Webhook failed with status: ${webhookResponse.status}`);
    }

    console.log("Webhook sent successfully.");

    return NextResponse.json(
      { message: "Email And Webhook Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email or webhook:", error);
    return NextResponse.json(
      { message: "Failed to Send Email And/or Webhook" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "GET method is available" },
    { status: 200 }
  );
}
