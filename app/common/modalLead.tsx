"use client"
import Link from 'next/link'
import styles from './modalLead.module.css'
import Image from 'next/image'
import Divisor from './divisor'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'

export default function ModalLead() {
    const [sucess, setSucess] = useState(false);
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Tel: '',
    });
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      sucess && null
      try {
        const response = await fetch('http://localhost:3000/pages/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: {
            "name": formData?.Name,
            "company": "sua base de contatos",
            "acting": "Contato via modal do site",
            "tel": formData?.Tel,
            "email": formData?.Email
          } }),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          setSucess(true)
        } else {
          console.error('Erro na solicitação:', response.status, response.statusText);
          // Lide com o erro conforme necessário
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
        // Lide com o erro conforme necessário
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    return (
    <>  
        <section className={styles.main}>
            <div className={styles.container} >
                <div className={styles.modal}>
                    <p className={styles.Close}><strong>X</strong></p>
                    <h1>CONVERSE VIA <span><br />WHATSAPP</span></h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Name">
                            <p>Como você gostaria de ser chamado?</p>
                            <input type="text" name='Name' 
                            value={formData.Name}
                            onChange={handleChange}
                            />
                            
                        </label>
                        <label htmlFor="Tel">
                            <p>Seu zap ou telefone:</p>
                            <input type="tel" name='Tel' 
                            value={formData.Tel}
                            onChange={handleChange} />
                        </label>
                        <label htmlFor="Email">
                            <p>E por último, seu melhor e-mail:</p>
                            <input type="email" name='Email'
                            value={formData.Email}
                            onChange={handleChange} />
                        </label>
                        <button className={styles.mainButton}>
                            <p>INICIAR <span>CONVERSA</span>{'>'}</p>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
