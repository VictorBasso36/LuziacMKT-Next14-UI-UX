import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export interface Data{
 
    name?: string;
    company?: string;
    acting?: string;
    tel?: number;
    email?: number;
    

}

export async function POST(req: NextRequest, res: NextResponse) {
    const dataItems = await req.json();
    console.log('@Contact', dataItems);
    const items = dataItems;
    console.log('@links', items);
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
            subject: `Lead Novo - Site Luziac - ${items?.name ||items?.data?.name } da ${items?.data?.company || items?.data?.acting || items?.acting } `,
            html: `
        <h3>Contato via site</h3>
        <li> Nome: ${items?.data?.name || items?.name}</li>
        <li> Empresa: ${items?.data?.company || items?.company}</li>
        <li> Telefone: ${items?.data?.tel || items?.tel}</li>
        <li> Atuação: ${items?.data?.acting || items?.acting}</li>
        <li> Email: ${items?.data?.email || items?.email}</li>
        `
        }
        console.log(mailOption)
        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
}