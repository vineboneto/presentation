import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      about: 'About',
      jobs: 'Jobs',
      portfolio: 'Portfolio',
      name: 'Name',
      role: 'Role',
      'Write some codes': 'Write some codes',
      from: 'From',
      'about-text':
        'I am currently a junior full stack developer, where I develop internal systems and complete websites for companies in the region. In my professional development the main technology I used and use is javascript/typescript, both in creating graphical interfaces that follow UX/UI concepts, and in development of web services that follow REST architecture. Im always looking for new horizons knowledge about other/new technologies that arouse my interest.',
      contact: 'Contact',
      'View Curriculum': 'View Curriculum',
      'Health department': 'Health department',
      'first-job-text': 'User support, maintenance of computers and printers.',
      'second-job-text': 'Development of complete systems for business management.',
      'Turing machine': 'Turing machine',
      'first-portfolio-text': 'Turing machine simulator (College work). I don"t really remember how it works',
      'N queens hill climbing': 'N queens hill climbing',
      'second-portfolio-text': 'Solving the problem of 8 queens on a chessboard using hill climbing search algorithm',
      'third-portfolio-text': 'Convert youtube videos to mp3/mp4',
    },
  },
  pt: {
    translation: {
      about: 'Sobre',
      jobs: 'Experiências',
      portfolio: 'Portfólio',
      'Write some codes': 'Escrever alguns códigos',
      name: 'Nome',
      role: 'Função',
      from: 'Onde',
      'about-text':
        'Atualmente sou desenvolvedor full stack júnior, onde desenvolvo sistemas internos e sites completos para empresas da região. No meu desenvolvimento profissional a principal tecnologia que utilizei e utilizo é javascript/typescript, tanto na criação de interfaces gráficas que seguem conceitos de UX/UI, quanto no desenvolvimento de web services que seguem a arquitetura REST. Estou sempre em busca de novos horizontes de conhecimento sobre outras/novas tecnologias que despertem meu interesse.',
      contact: 'Contato',
      'View Curriculum': 'Ver currículo',
      'Health department': 'Secretária Municipal de Saúde.',
      'first-job-text': 'Suporte ao usuário, manutenção de computadores e impressoras.',
      'second-job-text': 'Desenvolvimento de sistemas completos para gestão empresarial.',
      'Turing machine': 'Máquina de turing',
      'first-portfolio-text':
        'Simulador de máquina de Turing (trabalho universitário). Eu realmente não me lembro como funciona',
      'N queens hill climbing': '8 Rainhas hill climbing',
      'second-portfolio-text':
        'Resolvendo o problema de 8 rainhas em um tabuleiro de xadrez usando algoritmo de hill climbing',
      'third-portfolio-text': 'Converta vídeos do youtube para mp3/mp4',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
