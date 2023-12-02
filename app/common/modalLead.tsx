"use client"
import Link from 'next/link'
import styles from './modalLead.module.css'
import Image from 'next/image'
import Divisor from './divisor'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import { useOpen } from './providerModal'

export default function ModalLead() {
    const { open, setOpen } = useOpen()
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        if(open === 'whatsapp'){
            setRender(true)
        } else if(open === 'true'){
            setRender(false)
        }
        else{
            setRender(false)
        }
    }, [open])

    
    function setClose() {
      setOpen('false')
    }
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
        const response = await fetch('/pages/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData?.Name,
                company: "sua base de contatos",
                acting: "Contato via modal do site",
                tel: formData?.Tel,
                email: formData?.Email
            }),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          setSucess(true)
       
          window.location.href = 'https://wa.me/5511992070343?text=LUZIAC%20-%20Marketing%20Imobili%C3%A1rio.';
          
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
      if (!render) {
        return null;
      }
    return (
    <>  
        <section className={styles.main}>
            <div className={styles.container} >
                <div className={styles.modal}>
                    <p className={styles.Close} onClick={setClose}><strong>X</strong></p>
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
                        </label><br />
                       
                          <button className={styles.mainButton}>
                          {!sucess ? <p>INICIAR <span>CONVERSA</span>{' >'}</p> : <p>CONTATO <span>ENVIADO!</span></p>}
                          </button>
                        
                    </form> 
                    
                    
                </div>
            </div>
        </section>
    </>
  )
}
