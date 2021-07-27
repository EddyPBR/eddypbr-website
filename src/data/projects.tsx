export type ProjectType = {
  title: string;
  categories: string[];
  abstract: string;
  icon: string;
  thumbnail: string;
  url: string;
  team: string[];
  otherLinks: ProjectOtherLinksType;
  content: ProjectContentType[];
}

export type ProjectContentType = {
  type: "text" | "image" | "video";
  data: string;
}

export type ProjectOtherLinksType = {
  website?: string;
  github?: string;
  youtube?: string;
  googlePlay?: string;
  appleStore?: string;
}

export const projects = [
  {
    title: "Letmeask",
    categories: ["web", "pwa"],
    abstract: "Sistema de perguntas e respostas com ranqueamento de likes, excelente para responder perguntas em lives!",
    icon: "/projects/letmeask/letmeask-icon.jpg",
    thumbnail: "/projects/letmeask/letmeask-thumbnail.jpg",
    url: "/portfolio/letmeask",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://letmeask-virid.vercel.app/",
      github: "https://github.com/EddyPBR/letmeask",
      youtube: "https://www.youtube.com/watch?v=a7P--fnjtzE",
    },
    content: [
      {
        type: "text",
        data: "O letmeask foi um projeto desenvolvido pela turma da rocketseat no evento next-level-week, e adicionei uma série de features novas no projeto para deixa-lo ainda mais interessante."
      },
      {
        type: "text",
        data: "Resumidamente o projeto consiste em uma plataforma de perguntas e respostas para auxiliar pessoas ou grupos a responderem perguntas em lives, o projeto possui um sistema de ranqueamento de perguntas por likes ou seja as perguntas que possuem mais likes ficam no topo da lista de perguntas.",
      },
      {
        type: "text",
        data: "Quanto ao funcionamento é bem simples, o projeto possui autenticação com o google, então o apresentador faz login com o google e cria uma sala, ele compartilha o código da sala com os seus espectadores, os espectadores copiam esse link e entram na sala, nesse caso sem login, porém para perguntas é necessário fazer o login com o google.",
      },
      {
        type: "text",
        data: "Esse foi um breve resumo do projeto, espero que goste! - Acesse os links logo abaixo e saiba mais ou teste esse projeto você mesmo.",
      },
    ],
  },
  {
    title: "Gameplay",
    categories: ["mobile"],
    abstract: "Agende jogatinas com seus amigos com integração via discord app!",
    icon: "/projects/gameplay/gameplay-icon.jpg",
    thumbnail: "/projects/gameplay/gameplay-thumbnail.jpg",
    url: "/portfolio/project",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      github: "https://github.com/EddyPBR/gameplay",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. Metus amet est pellentesque quis gravida semper eget faucibus."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet.",
      },
    ],
  },
  {
    title: "Move-it",
    categories: ["web"],
    abstract: "Técnica de pomodoro com desafios de relaxamento corporais e oculares em um sistema de leveling up!",
    icon: "/projects/moveit/moveit-icon.jpg",
    thumbnail: "/projects/moveit/moveit-thumbnail.jpg",
    url: "/portfolio/move-it",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://move-it-eddypbr.vercel.app/",
      github: "https://github.com/EddyPBR/move-it",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. Metus amet est pellentesque quis gravida semper eget faucibus."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet.",
      },
    ],
  },
  {
    title: "Mural digital",
    categories: ["api", "web", "mobile"],
    abstract: "Um sistema para informar e alertar anúncios e notícias para os funcionários da empresa!",
    icon: "/projects/muraldigital/muraldigital-icon.jpg",
    thumbnail: "/projects/muraldigital/muraldigital-thumbnail.jpg",
    url: "/portfolio/mural-digital",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://www.rallymotosmural.ml/",
      github: "https://github.com/EddyPBR/mural-digital",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. Metus amet est pellentesque quis gravida semper eget faucibus."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet.",
      },
    ],
  },
  {
    title: "Codebacker",
    categories: ["mobile"],
    abstract: "Um aplicativo para controle do carregamento de produtos em veículos empresariais!",
    icon: "/projects/codebacker/codebacker-icon.jpg",
    thumbnail: "/projects/codebacker/codebacker-thumbnail.jpg",
    url: "/portfolio/codebacker",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      github: "https://github.com/EddyPBR/codebacker",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. Metus amet est pellentesque quis gravida semper eget faucibus."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquet convallis gravida risus. Ultrices sit ornare curabitur sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet.",
      },
    ],
  }
];
