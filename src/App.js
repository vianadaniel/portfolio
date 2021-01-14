import "./App.css"
import { Projects } from "./Projects"

function App() {
  return (
    <div className="App">
      <header className="App-Bar">
        <div>
          <p className="Daniel">Daniel</p>
        </div>
        <div className="App-link">
          <p className="quem-sou">quem sou</p>
          <p className="quem-sou">projetos</p>
          <p className="quem-sou">contato</p>
        </div>
      </header>
      <div className="container-foto">
        <img src="daniel.jpg" alt="Daniel" className="daniel-foto"></img>
        <div className="container-sou">
          <p className="eu-sou-daniel">Eu sou Daniel Almeida</p>
          <p className="eu-sou-daniel-text">Desenvolvedor Web Full Stack</p>
          <p className="eu-sou-daniel-text" style={{ fontSize: "16px" }}>
            Apaixonado por tecnologia e programação
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
      <div className="container-azul-escuro">
        <div className="container-azul-escuro-text">
          <p className="sobre-mim">Sobre mim</p>
          <p className="sobre-mim-text">
            Meu nome é Daniel, estou a muitos anos na área de pecuária de corte.
            Depois de 12 anos na fazenda, queria fazer algo diferente e resolvi
            fazer faculdade de Análise e Desenvolvimento de Sistemas, assim
            descobri minha paixão por desenvolvimento web. Primeiro aprendi
            Python com Flask, fui pulando várias tecnologias até fazer o curso
            da Dr Angela Yu The Complete 2020 Web Development Bootcamp (Udemy).
            Fiz dezenas de cursos pela net. Finalmente entrei em um curso
            Fullstack da Labenu em qual aprendi react, typescript, por 6 meses
            fiz muitos projetos, além disso aprendi orientação a objeto,
            arquitetura em camadas e infraestrutura da AWS. Fiz um vídeo falando
            sobre o curso https://www.youtube.com/watch?v=CEnqzJq2Vwo . Agora
            estou a procura da primeira oportunidade de trabalho na área de
            desenvolvimento web Fullstack
          </p>
        </div>
        <img src="group-29.svg" alt="Estudo" />
      </div>
      <div className="container-azul-claro">
        <p className="meus-conhecimentos">Meus Conhecimentos</p>
        <div className="container-conhecimentos">
          <div className="container-metade">
            <div className="metade">
              <h2>Front-end</h2>
              <h3>
                Desenvolvimento de aplicações web utilizando HTML, CSS e
                JavaScript. <br />
                <br /> Criação de sites responsivos seguindo princípio de Mobile
                First.
              </h3>
            </div>
            <div className="metade">
              <h2>Back-end</h2>
              <h3>
                Aplicações utilizando NodeJS, Typescript, MySQL e MongoDB.
                Criação de API´s para comunicação com front-end seguindo
                princípio de Clean Code.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-beje">
        <p className="meus-conhecimentos">Meus Conhecimentos</p>
        <div className="container-conhecimentos">
          <div className="container-metade">
            <div className="metade">
              <p className="curso">Web Full Stack na Labenu</p>
              <br />
              <h3>
                Curso Web Full Stack focado em empregabilidade JavaScript com
                clean code
              </h3>
            </div>
            <div className="metade">
              <p className="curso">Análise e desenvolvimento de sistemas</p>
              <h3>
                Cursando último período na Imepac, experiência C# windows form
                CRUD
              </h3>
            </div>
            <div className="metade">
              <p className="curso">Agronomia</p>
              <br />
              <h3>Formado pela FAZU, com experiência em pecuária de corte.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-claro">
        <p className="meus-projetos">Meus Projetos</p>
        <Projects />
      </div>
      <div className="container-vermelho">
        <p className="contrate-me">Contrate me !!</p>
        <p className="contrate-me-text">
          Procuro oportunidade de trabalho onde eu possa aprender, me
          desenvolver e evoluir na minha carreia profissional. E-mail para
          contato: vianadaniel@hotmail.com Celular: (34) 98885-8854
        </p>
        <div className="icone-container">
          <i
            className="fa fa-linkedin-square fa-2x"
            style={{ color: "white" }}
            aria-hidden="true"
          ></i>
          <i class="fa fa-github fa-2x" style={{ color: "white" }}></i>
          <i class="fa fa-whatsapp fa-2x" style={{ color: "white" }}></i>
        </div>
      </div>
      <footer>
        <p className="nome">Copyright &copy; 2020 Daniel Almeida</p>
      </footer>
    </div>
  )
}

export default App
