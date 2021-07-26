export type ProjectType = {
  title: string,
  categories: string[],
  abstract: string,
  icon: string,
  thumbnail: string,
  url: string,
}

export const projects = [
  {
    title: "Letmeask",
    categories: ["web", "pwa"],
    abstract: "Sistema de perguntas e respostas com ranqueamento de likes, excelente para responder perguntas em lives!",
    icon: "/projects/letmeask/letmeask-icon.jpg",
    thumbnail: "/projects/letmeask/letmeask-thumbnail.jpg",
    url: "/portfolio/letmeask",
  },
  {
    title: "Gameplay",
    categories: ["mobile"],
    abstract: "Agende jogatinas com seus amigos com integração via discord app!",
    icon: "/projects/gameplay/gameplay-icon.jpg",
    thumbnail: "/projects/gameplay/gameplay-thumbnail.jpg",
    url: "/portfolio/project",
  },
  {
    title: "Move-it",
    categories: ["web"],
    abstract: "Técnica de pomodoro com desafios de relaxamento corporais e oculares em um sistema de leveling up!",
    icon: "/projects/moveit/moveit-icon.jpg",
    thumbnail: "/projects/moveit/moveit-thumbnail.jpg",
    url: "/portfolio/move-it",
  },
  {
    title: "Mural digital",
    categories: ["api", "web", "mobile"],
    abstract: "Um sistema para informar e alertar anúncios e notícias para os funcionários da empresa!",
    icon: "/projects/muraldigital/muraldigital-icon.jpg",
    thumbnail: "/projects/muraldigital/muraldigital-thumbnail.jpg",
    url: "/portfolio/mural-digital"
  },
  {
    title: "Codebacker",
    categories: ["mobile"],
    abstract: "Um aplicativo para controle do carregamento de produtos em veículos empresariais!",
    icon: "/projects/codebacker/codebacker-icon.jpg",
    thumbnail: "/projects/codebacker/codebacker-thumbnail.jpg",
    url: "/portfolio/codebacker"
  }
];
