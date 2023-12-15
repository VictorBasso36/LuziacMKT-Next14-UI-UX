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
          console.log(responseData)
          window.open('https://wa.me/5511992070343?text=Oii!%20Vi%20o%20site%20da%20Luziac%20e%20quero%20potencializar%20minhas%20vendas%20com%20Marketing%20Imobili%C3%A1rio,%20pode%20me%20ajudar?%22', '_blank');

        } else {
          console.error('Erro na solicitação:', response.status, response.statusText);

        }
      } catch (error) {
        console.error('Erro na solicitação:', error);

      }
    };

      const phoneMask = (value: string) => {
        return value
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/g, '($1) $2')
          .replace(/(\d)(\d{4})$/, '$1-$2')
          .slice(0, 20);
      }
    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
      
        if (name === 'Tel') {
          value = phoneMask(value);
        }
      
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
                            <input type="text" required={true} name='Name' 
                            value={formData.Name}
                            onChange={handleChange}
                            />
                            
                        </label>
                        <label htmlFor="Tel">
                            <p>Seu zap ou telefone:</p>
                            <input type="tel" required={true} name='Tel' 
                            value={formData.Tel}
                            onChange={handleChange} />
                        </label>
                        <label htmlFor="Email">
                            <p>E por último, seu melhor e-mail:</p>
                            <input type="email" required={true}  name='Email'
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
