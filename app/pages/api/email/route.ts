import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export interface Data{
    name?: string;
    company?: string;
    acting?: string;
    tel?: number;
    email?: number;

}

export async function handler(req: NextRequest, res: NextResponse) {
    const dataItems: Data = await req.json();
    console.log('@Contact', dataItems);
    const items = dataItems;
    try {

        const transporter = nodemailer.createTransport({
            service: 'SMTP',
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USR,
                pass: process.env.PASS
            }
        })

        const mailOption = {
            from: 'Guilherme@luziac.com.br',
            to: 'Guilherme@luziac.com.br,',
            subject: `Contato via site - ${items?.name} da ${items?.company || items?.acting} `,
            html: `
        <h3>Contato via site</h3>
        <li> Nome: ${items?.name}</li>
        <li> Empresa: ${items?.company}</li>
        <li> Telefone: ${items?.tel}</li>
        <li> Atuação: ${items?.acting}</li>
        <li> Email: ${items?.email}</li>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}

export async function GET(data: Data) {
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
}