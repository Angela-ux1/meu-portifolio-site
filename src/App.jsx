import './App.css';

const projetos = [
  {
    numero: '01',
    titulo: 'Cadastro Interativo',
    descricao:
      'Aplicação web desenvolvida para praticar construção de formulários, organização de informações e interação com o usuário, utilizando recursos fundamentais do desenvolvimento front-end.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    projeto: 'https://github.com/Angela-ux1/cadastro-inteligente',
    github: 'https://github.com/Angela-ux1/cadastro-inteligente',
  },
  {
    numero: '02',
    titulo: 'Meu Portfólio',
    descricao:
      'Portfólio profissional desenvolvido para apresentar minha trajetória acadêmica, habilidades e projetos na área de tecnologia, utilizando React, JavaScript e CSS.',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    projeto: 'https://github.com/Angela-ux1/meu-portifolio-site',
    github: 'https://github.com/Angela-ux1/meu-portifolio-site',
  },
  {
    numero: '03',
    titulo: 'Tech Commerce Solutions',
    descricao:
      'Projeto acadêmico desenvolvido durante minha formação em Engenharia de Software, com foco na criação de uma solução web voltada ao contexto de tecnologia e comércio digital.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    projeto: 'https://github.com/Angela-ux1/tech-commerce-solutions',
    github: 'https://github.com/Angela-ux1/tech-commerce-solutions',
  },
];

const habilidades = [
  'Desenvolvimento de Software',
  'Desenvolvimento Web',
  'Análise de Sistemas',
  'Organização e Gestão',
  'Tecnologia e Inovação',
  'Aprendizado Contínuo',
];

const tecnologias = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Figma',
  'Git',
  'GitHub',
];

const experiencias = [
  {
    numero: '01',
    cargo: 'Estagiária de Design',
    empresa: 'IFAM',
    projeto: 'Projeto Capacita 4.0',
    descricao:
      'Experiência prática com criação de interfaces e protótipos para projetos digitais, utilizando Figma e aplicando conceitos de UI/UX.',
    atividades: [
      'Criação de telas e wireframes no Figma.',
      'Desenvolvimento de interfaces para lojas online.',
      'Criação de interfaces para portfólios.',
      'Organização visual e estruturação de páginas.',
    ],
  },
  {
    numero: '02',
    cargo: 'Assessora de Coordenadoria',
    empresa: 'Prefeitura Municipal de Presidente Figueiredo',
    projeto: 'Convênios / SEMPLAF',
    descricao:
      'Atuação em rotinas administrativas, organização de documentos e acompanhamento de processos e demandas do setor.',
    atividades: [
      'Organização e controle de documentos.',
      'Acompanhamento de processos relacionados a convênios.',
      'Utilização de sistemas e plataformas governamentais.',
      'Elaboração e organização de documentos oficiais.',
    ],
  },
];

const email = 'francyangeladasilvamachado@gmail.com';
const linkedin = 'https://www.linkedin.com/in/francy-sillva/';
const github = 'https://github.com/Angela-ux1';

/* =========================
   ÍCONES DAS HABILIDADES
========================= */

function IconeHabilidade({ tipo }) {
  if (tipo === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </svg>
    );
  }

  if (tipo === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
        <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
      </svg>
    );
  }

  if (tipo === 2) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1" />
        <path d="m17 17 2.1 2.1" />
        <path d="m19.1 4.9-2.1 2.1" />
        <path d="m7 17-2.1 2.1" />
      </svg>
    );
  }

  if (tipo === 3) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    );
  }

  if (tipo === 4) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16" />
        <path d="M4 12h16" />
        <path d="m6.5 6.5 11 11" />
        <path d="m17.5 6.5-11 11" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-3 3 2 5-6" />
      <path d="M15 8h3v3" />
    </svg>
  );
}

function App() {
  return (
    <div>
      {/* =========================
          CABEÇALHO
      ========================= */}

      <header className="cabecalho">
        <a className="logo" href="#inicio">
          Angela<span>.dev</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        {/* =========================
            INÍCIO
        ========================= */}

        <section id="inicio" className="inicio">
          <div className="apresentacao">
            <span className="etiqueta">
              <span className="ponto"></span>
              Desenvolvedora em formação
            </span>

            <p className="destaque">Olá, meu nome é</p>

            <h1>
              Francyangela
              <span> Machado.</span>
            </h1>

            <h2>Estudante de Engenharia de Software</h2>

            <p className="texto-inicio">
              Sou estudante de Engenharia de Software,
              apaixonada por tecnologia e desenvolvimento.
              Estou construindo minha trajetória profissional
              criando soluções, aprendendo novas tecnologias
              e transformando ideias em projetos.
            </p>

            {/* BOTÕES DO INÍCIO */}

            <div className="botoes-inicio">
              <a className="botao" href="#projetos">
                Conheça meus projetos
              </a>

              <a
                className="botao botao-secundario"
                href="/curriculo-francyangela-machado.pdf"
                download
              >
                Baixar meu currículo ↓
              </a>
            </div>
          </div>

          <div className="foto-container">
            <div className="foto-brilho"></div>

            <img
              src="/perfil.png"
              alt="Foto profissional de Francyangela Machado"
              className="foto-perfil"
            />

            <div className="selo-foto">
              <span>✦</span>
              Desenvolvedora em formação
            </div>
          </div>
        </section>

        {/* =========================
            SOBRE MIM
        ========================= */}

        <section id="sobre" className="secao sobre">
          <div className="sobre-imagem">
            <img
              src="/avatar.png"
              alt="Avatar ilustrado de Francyangela"
              className="avatar-sobre"
            />
          </div>

          <div className="sobre-conteudo">
            <span className="subtitulo">UM POUCO SOBRE MIM</span>

            <h2>
              Construindo meu caminho na{' '}
              <span className="texto-destaque">tecnologia.</span>
            </h2>

            <p>
              Sou estudante de Engenharia de Software,
              atualmente no 6º período, e venho construindo
              minha trajetória na área de tecnologia por meio
              de projetos acadêmicos e pessoais.
            </p>

            <p>
              Tenho interesse em desenvolvimento de software,
              desenvolvimento web, análise de sistemas e
              criação de soluções que unam tecnologia,
              organização e praticidade.
            </p>

            <p>
              Estou sempre buscando aprender, desenvolver
              novas habilidades e transformar conhecimento
              em projetos que possam fazer parte da minha
              evolução profissional.
            </p>

            <div className="lista-habilidades">
              {habilidades.map((habilidade, index) => (
                <div className="habilidade" key={habilidade}>
                  <span className="icone-habilidade">
                    <IconeHabilidade tipo={index} />
                  </span>

                  <span>{habilidade}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            TECNOLOGIAS
        ========================= */}

        <section
          id="tecnologias"
          className="secao tecnologias-secao"
        >
          <span className="subtitulo">TECNOLOGIAS</span>

          <h2>
            Ferramentas que fazem parte da minha{' '}
            <span className="texto-destaque">jornada.</span>
          </h2>

          <p className="descricao-tecnologias">
            Tecnologias e ferramentas que venho utilizando
            em projetos acadêmicos, pessoais e profissionais.
          </p>

          <div className="lista-tecnologias">
            {tecnologias.map((tecnologia) => (
              <div
                className="tecnologia-card"
                key={tecnologia}
              >
                <span className="tecnologia-ponto"></span>
                {tecnologia}
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            EXPERIÊNCIA
        ========================= */}

        <section id="experiencia" className="secao experiencia">
          <span className="subtitulo">
            EXPERIÊNCIA PROFISSIONAL
          </span>

          <h2>
            Experiências que fazem parte da minha{' '}
            <span className="texto-destaque">trajetória.</span>
          </h2>

          <p className="descricao-experiencia">
            Experiências que contribuíram para minha formação,
            desenvolvimento profissional e preparação para
            atuar na área de tecnologia.
          </p>

          <div className="lista-experiencias">
            {experiencias.map((experiencia) => (
              <article
                className="experiencia-card"
                key={experiencia.numero}
              >
                <span className="numero-experiencia">
                  {experiencia.numero}
                </span>

                <span className="experiencia-tipo">
                  Experiência profissional
                </span>

                <h3>{experiencia.cargo}</h3>

                <p className="experiencia-empresa">
                  {experiencia.empresa}
                </p>

                <span className="experiencia-projeto">
                  {experiencia.projeto}
                </span>

                <p className="experiencia-descricao">
                  {experiencia.descricao}
                </p>

                <div className="experiencia-atividades">
                  {experiencia.atividades.map((atividade) => (
                    <div key={atividade}>
                      <span>✓</span>
                      <p>{atividade}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            PROJETOS
        ========================= */}

        <section id="projetos" className="secao projetos">
          <span className="subtitulo">MEU TRABALHO</span>

          <h2>Projetos em destaque.</h2>

          <p className="descricao-projetos">
            Alguns projetos que fazem parte da minha
            jornada na tecnologia e da minha formação
            em Engenharia de Software.
          </p>

          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <article
                className="cartao-projeto"
                key={projeto.numero}
              >
                <span className="numero-projeto">
                  {projeto.numero}
                </span>

                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                <div className="tecnologias">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}
                </div>

                <div className="acoes-projeto">
                  <a
                    className="botao-projeto principal"
                    href={projeto.projeto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                    <span>↗</span>
                  </a>

                  <a
                    className="botao-projeto secundario"
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            CONTATO
        ========================= */}

        <section id="contato" className="secao contato">
          <span className="subtitulo">CONTATO</span>

          <h2>Vamos criar algo juntas?</h2>

          <p>
            Estou aberta a oportunidades, conexões
            e novos desafios na área de tecnologia.
          </p>

          <div className="botoes-contato">
            <a
              className="botao"
              href={`mailto:${email}`}
            >
              Enviar e-mail ↗
            </a>

            <a
              className="botao botao-secundario"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="informacoes-contato">
            <a href={`mailto:${email}`}>
              {email}
            </a>

            <span>•</span>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/francy-sillva
            </a>
          </div>

          <div className="redes-sociais">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      {/* =========================
          RODAPÉ
      ========================= */}

      <footer>
        <p>© 2026 Angela.dev</p>
        <p>Desenvolvido por Francyangela Machado.</p>
      </footer>
    </div>
  );
}

export default App;