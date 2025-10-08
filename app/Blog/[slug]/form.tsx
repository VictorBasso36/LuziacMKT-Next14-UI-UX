"use client";
import styles from "./form.module.css";
import Image from "next/image";
import { useOpen } from "@/app/common/providerModal";
import { useState } from "react";

export default function FormBlog({ url, slug }: { url: string; slug: string }) {
  const [sucess, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Tel: "",
    Acting: "",
    Company: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sucess && null;
    try {
      const response = await fetch("/pages/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData?.Name,
          company: formData?.Company,
          acting: formData?.Acting,
          tel: formData?.Tel,
          email: formData?.Email,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSucess(true);

        window.open(
          "https://wa.me/5511992070343?text=Oii!%20Vi%20o%20site%20da%20Luziac%20e%20quero%20potencializar%20minhas%20vendas%20com%20Marketing%20Imobili%C3%A1rio,%20pode%20me%20ajudar?%22",
          "_blank"
        );
      } else {
        console.error(
          "Erro na solicitação:",
          response.status,
          response.statusText
        );
        // Lide com o erro conforme necessário
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
      // Lide com o erro conforme necessário
    }
  };

  const phoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .slice(0, 20);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "Tel") {
      value = phoneMask(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { setOpen } = useOpen();

  return (
    <div className={styles.mainContentForm}>
      <Image
        src={url || "/blogImage.svg"}
        alt={`${slug} - Artigo Marketing Imobiliário da agência LUZIAC.`}
        width={420}
        height={300}
      ></Image>

      <div className={styles.contentForm}>
        <form
          id="myForm"
          onSubmit={handleSubmit}
          className={styles.FormMain}
          action=""
        >
          <div className={styles.DetailItem}></div>
          <label htmlFor="Name">
            <p>
              Como você <span>gostaria de ser chamado?</span>
            </p>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Company">
            <p>
              Qual o nome da <span>sua empresa?</span>
            </p>
            <input
              type="text"
              name="Company"
              value={formData.Company}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Acting">
            <p>
              Qual seu <span>tipo de atuação?</span>
            </p>
            <input
              type="text"
              name="Acting"
              value={formData.Acting}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Tel">
            <p>
              Seu <span>zap</span> ou <span>telefone</span>:
            </p>
            <input
              type="tel"
              name="Tel"
              placeholder="DDD + Telefone (11 9 9999-9999)"
              value={formData.Tel}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Email">
            <p>
              E por último, <span>seu melhor e-mail:</span>
            </p>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </label>
        </form>

        <button
          form="myForm"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          {!sucess ? (
            <p>
              {" "}
              <span>ENVIAR</span> (ESTOU PRONTO <br />
              PARA POTENCIALIZAR <br />
              MINHAS VENDAS.) <span>{" >"}</span>
            </p>
          ) : (
            <p>
              DADOS <span>ENVIADOS!</span>{" "}
            </p>
          )}
        </button>
      </div>
    </div>
  );
}
