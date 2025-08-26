# Portfolio de Vinicius Fontes de Andrade

## 🚀 Portfolio Profissional Desenvolvido com Next.js

Este é meu portfolio pessoal desenvolvido com Next.js 15, React 19 e Tailwind CSS. O projeto apresenta minhas habilidades, experiências, projetos e educação de forma moderna e responsiva.

---


## Visualize o site ao vivo [aqui](https://viniciusfandrade.vercel.app/).

---

## Índice :scroll:

- [Seções](#seções-bookmark)
- [Demonstração](#demonstração-movie_camera)
- [Instalação](#instalação-arrow_down)
- [Começando](#começando-dart)
- [Uso](#uso-joystick)
- [Deploy](#deploy-rocket)
- [Tecnologias Utilizadas](#tecnologias-utilizadas-package)

---

# Seções :bookmark:

- **SEÇÃO HERO** - Apresentação inicial com animação
- **SOBRE MIM** - Informações pessoais e profissionais
- **EXPERIÊNCIA** - Histórico profissional
- **HABILIDADES** - Tecnologias e ferramentas
- **PROJETOS** - Portfolio de trabalhos realizados
- **EDUCAÇÃO** - Formação acadêmica
- **BLOG** - Artigos e posts do dev.to
- **CONTATOS** - Formulário de contato e redes sociais

---

# Instalação :arrow_down:

### Você precisará ter Git e Node.js instalados

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)

#### Certifique-se de ter as versões mais recentes:

```bash
node --version
git --version
```

## <br />

# Começando :dart:

### Clone o repositório

```bash
git clone https://github.com/ViniciusFontess/portfolio.git

cd portfolio/portfolio_1
```

### Instale as dependências

```bash
npm install
# ou
yarn install
```

### Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

### Executando com Docker Compose

1. **Build da Imagem Docker e Execução do Container**:
    ```bash
    docker-compose up --build
    ```

2. **Acesse a Aplicação**:
    Visite [http://localhost:3000](http://localhost:3000) no seu navegador.

---

# Uso :joystick:

Crie um arquivo `.env` baseado no `.env.example`:

```env
NEXT_PUBLIC_GTM = GTM-XXXXXXX
NEXT_PUBLIC_APP_URL = https://viniciusfandrade.vercel.app
EMAIL_ADDRESS = vinicius.fontes@ufms.br
```

### Personalize os dados na pasta `utils/data`

Exemplo do arquivo `personal-data.js`:

```javascript
export const personalData = {
  name: "Vinicius Fontes de Andrade",
  profile: "/profile.png",
  designation: "Computer Engineering",
  description: "I am a Computer Engineering student at the Federal University of Mato Grosso do Sul (UFMS) with extensive experience in software development, computer vision, and robotics. I am proficient in languages ​​such as Python, C/C++, Java, and JavaScript, with a focus on computational optimization and artificial intelligence applications. I seek to apply my skills to challenging projects and contribute to the development of innovative technological solutions, with a strong interest in areas such as IoT, BLE, and machine learning.",
  email: "vinicius.fontes@ufms.br",
  github: "https://github.com/ViniciusFontess",
  linkedIn: "https://linkedin.com/in/vinicius-fontes",
  devUsername: "viniciusfontes",
  resume: "...",
};
```

---

# Deploy :rocket:

## Deploy no Vercel:

1. **Faça login** no [Vercel](https://vercel.com/)
2. Clique em **"New Project"**
3. Selecione o repositório do GitHub e clique em **Import**
4. Configure as variáveis de ambiente no dashboard do Vercel
5. Clique em **Deploy**

O Vercel detectará automaticamente o app Next.js e fará o build.

---

# Tecnologias Utilizadas :package:

|      Tecnologia        |    Versão    |
| :--------------------: | :----------: |
|         Next.js        |    15.5.0    |
|         React          |    19.1.1    |
|       React-DOM        |    19.1.1    |
|      Tailwind CSS     |    latest    |
|      lottie-react      |    2.4.1     |
|   react-fast-marquee   |    1.6.2     |
|      react-icons       |    4.11.0    |
|     react-toastify     |    10.0.4    |
|         axios          |    1.6.8     |
|       nodemailer       |    6.9.15    |
|          sass          |    1.69.5    |

---

## Características Especiais

- ✅ **Responsivo** - Funciona perfeitamente em todos os dispositivos
- ✅ **Performance Otimizada** - Build otimizado com Next.js 15
- ✅ **SEO Friendly** - Meta tags e estrutura otimizada
- ✅ **Animações Suaves** - Lottie animations e transições CSS
- ✅ **Formulário de Contato** - Sistema de envio de emails
- ✅ **Blog Integrado** - Fetch automático de posts do dev.to
- ✅ **Docker Support** - Containerização para deploy

---

## Contato

- **GitHub**: [@ViniciusFontess](https://github.com/ViniciusFontess)
- **Email**: vinicius.fontes@ufms.br
- **LinkedIn**: [Vinicius Fontes](https://linkedin.com/in/vinicius-fontes)

---

⭐ Não se esqueça de dar uma estrela se este projeto te ajudou!
