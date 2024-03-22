import "./App.css";
import { Projects } from "./Projects";
import React, { useRef } from "react";

function App() {
  const myRefQuemSou = useRef(null);
  const executeScroll = () => myRefQuemSou.current.scrollIntoView();
  const myRefProjetos = useRef(null);
  const executeScroll1 = () => myRefProjetos.current.scrollIntoView();
  const myRefContato = useRef(null);
  const executeScroll2 = () => myRefContato.current.scrollIntoView();

  return (
    <div className="App">
      <header className="App-Bar">
        <div>
          <p className="Daniel">
            Daniel<img id="foto" src="perfil.jpg" alt="foto de perfil"></img>
          </p>
        </div>
        <div className="App-link">
          <p onClick={executeScroll} className="quem-sou">
            whoami
          </p>
          <p onClick={executeScroll1} className="quem-sou">
            projects
          </p>
          <p onClick={executeScroll2} className="quem-sou">
            contact
          </p>
        </div>
      </header>
      <div className="container-foto">
        <img src="daniel.jpg" alt="Daniel" className="daniel-foto"></img>
        <div className="container-sou">
          <p className="eu-sou-daniel">I am Daniel Almeida</p>
          <p className="eu-sou-daniel-text">Backend / DevOps</p>
          <p className="eu-sou-daniel-text" style={{ fontSize: "16px" }}>
            The passion for technology and programming can lead to many
            opportunities.
          </p>
        </div>
        <div className="container-logo">
          <i
            className="fa fa-linkedin-square fa-2x"
            style={{ color: "white" }}
            aria-hidden="true"
          ></i>
          <i class="fa fa-github fa-2x" style={{ color: "white" }}></i>
          <i class="fa fa-whatsapp fa-2x" style={{ color: "white" }}></i>
        </div>
      </div>
      <div ref={myRefQuemSou} className="container-azul-escuro">
        <div className="container-azul-escuro-text">
          <p className="sobre-mim">About me</p>
          <p className="sobre-mim-text">
            Passionate about technology and driven by a deep understanding of
            backend development and DevOps, I bring over 3 years of experience
            to the table. With a strong focus on Node.js, I have designed
            scalable and efficient backend systems, developing and maintaining
            RESTful APIs. My expertise extends to DevOps practices, ensuring the
            reliability and performance of systems through meticulous attention
            to detail and a commitment to best practices.
          </p>
        </div>
        <img src="group-29.svg" className="estudo" alt="Estudo" />
      </div>
      <div className="container-azul-claro">
        <p className="meus-conhecimentos">My knowledge</p>
        <div className="container-conhecimentos">
          <div className="container-metade">
            <div className="metade">
              <h2>DevOps</h2>
              <h3>
                With a solid background in DevOps, I have honed my skills in
                creating efficient and automated deployment pipelines. I am
                proficient in using tools such as Docker for containerization,
                ensuring consistency across development, testing, and production
                environments. My experience includes implementing CI/CD
                pipelines to streamline the software delivery process, enhancing
                the efficiency and reliability of our systems. AWS Services
              </h3>
            </div>
            <div className="metade">
              <h2>Back-end</h2>
              <h3>
                I bring extensive expertise in backend development, specializing
                in Node.js and TypeScript to design and implement robust,
                scalable, and efficient server-side applications. My proficiency
                extends to database management with MongoDB, SQL and Redis,
                ensuring data integrity and performance.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-beje">
        <p className="meus-conhecimentos">Education</p>
        <div className="container-conhecimentos">
          <div className="container-metade">
            <div className="metade">
              <p className="curso">Web Full Stack Labenu</p>
              <br />
              <h3>
                Full Stack Web Development course focused on employability,
                emphasizing JavaScript and clean code practices.
              </h3>
            </div>
            <div className="metade">
              <p className="curso">IMEPAC</p>
              <h3>College of Software Development</h3>
            </div>
            <div className="metade">
              <p className="curso">Tamwood - Web Development</p>
              <br />
              <h3>Studying in Vancouver</h3>
            </div>
          </div>
        </div>
      </div>
      <div ref={myRefProjetos} className="container-claro">
        <p className="meus-projetos">My projects</p>
        <Projects />
      </div>
      <div className="container-vermelho">
        <p className="contrate-me">Hire me!!</p>
        <p ref={myRefContato} className="contrate-me-text">
          I am looking for job opportunities where I can learn, develop, and
          evolve in my professional career. Contact email:
          vianadaniel@hotmail.com
        </p>
        <div className="icone-container">
          <a href="https://www.linkedin.com/in/daniel-viana-almeida/">
            <i
              className="fa fa-linkedin-square fa-3x"
              style={{ color: "white" }}
              aria-hidden="true"
            ></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5534988858854&text=Estive no seu portfólio!">
            <i
              class="fa fa-github fa-3x"
              style={{ color: "white", padding: "10px" }}
            ></i>
            <i class="fa fa-whatsapp fa-3x" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="icone-container-p">
          <a href="https://api.whatsapp.com/send?phone=5534988858854&text=Estive no seu portfólio!">
            <button>
              <i class="fa fa-whatsapp fa-3x" style={{ color: "green" }}></i>
            </button>
          </a>
        </div>
      </div>
      <footer>
        <p className="nome">Copyright &copy; 2024 Daniel Almeida</p>
      </footer>
    </div>
  );
}

export default App;
