export type ProjectType = {
  title: string;
  categories: string[];
  abstract: string;
  icon: string;
  thumbnail: string;
  url: string;
  team: string[];
  otherLinks: ProjectOtherLinksType;
  content: string;
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
    icon: "/portfolio/letmeask/letmeask-icon.webp",
    thumbnail: "/portfolio/letmeask/letmeask-thumbnail.webp",
    url: "/portfolio/letmeask",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://letmeask-virid.vercel.app/",
      github: "https://github.com/EddyPBR/letmeask",
      youtube: "https://www.youtube.com/watch?v=a7P--fnjtzE",
    },
    content: `
      <p>O letmeask foi um projeto desenvolvido pela turma da rocketseat no evento next-level-week, e adicionei uma série de features novas no projeto para deixa-lo ainda mais interessante.</p>
      <p>Resumidamente o projeto consiste em uma plataforma de perguntas e respostas para auxiliar pessoas ou grupos a responderem perguntas em lives, o projeto possui um sistema de ranqueamento de perguntas por likes ou seja as perguntas que possuem mais likes ficam no topo da lista de perguntas.</p>
      <p>Quanto ao funcionamento é bem simples, o projeto possui autenticação com o google, então o apresentador faz login com o google e cria uma sala, ele compartilha o código da sala com os seus espectadores, os espectadores copiam esse link e entram na sala, nesse caso sem login, porém para perguntas é necessário fazer o login com o google.</p>
      <p>Esse foi um breve resumo do projeto, espero que goste! - Acesse os links logo abaixo e saiba mais ou teste esse projeto você mesmo.</p>
    `,
  },
  {
    title: "Gameplay",
    categories: ["mobile"],
    abstract: "Agende jogatinas com seus amigos com integração via discord app!",
    icon: "/portfolio/gameplay/gameplay-icon.webp",
    thumbnail: "/portfolio/gameplay/gameplay-thumbnail.webp",
    url: "/portfolio/gameplay",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      github: "https://github.com/EddyPBR/gameplay",
    },
    content: `
      <p>O GamePlay App foi construido pela Rocketseat na next-level-week. Se você assim como muitos já passou pela situação onde você e seus amigos querem jogar determinado jogo juntos, mas não encontram um horário onde todos estejam disponíveis... este App é para você!</p>
      <p>O GamePlay App veio para te salvar, pois o mesmo agenda jogatinas com seus amigos, gerando notificações de lembrete das jogatinas e tudo com a integração da api do Discord App que por sua vez mostra usuário que já estão online ou não.</p>
      <p>Esse foi um breve resumo do projeto, espero que goste! - Acesse o link logo abaixo e saiba mais ou teste esse projeto você mesmo.</p>
    `,
  },
  {
    title: "Move-it",
    categories: ["web"],
    abstract: "Técnica de pomodoro com desafios de relaxamento corporais e oculares em um sistema de leveling up!",
    icon: "/portfolio/moveit/moveit-icon.webp",
    thumbnail: "/portfolio/moveit/moveit-thumbnail.webp",
    url: "/portfolio/moveit",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://move-it-eddypbr.vercel.app/",
      github: "https://github.com/EddyPBR/move-it",
    },
    content: `
      <p>Já ouviu falar da tecnica de pomodoro? não? - Então vamos lá. A técnica de pomodoro é um método de gerenciamento de tempo. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.</p>
      <p>A técnica permite que o usuário esteja focado na execução da tarefa ao invés do resultado. Isso diminui bastante a ansiedade e reduz os níveis de desistência o que por sua vez permite executar de forma até mesmo prazerosa o trabalho e estudos.</p>
      <p>Dito isto, imagine uma técnica poderosissima como essa alinhada a exercicios de poucos minutos com o objetivo de relaxar a musculatura e descansar a visão, é fantástico!</p>
      <p>O projeto consiste em um contador de 25 minutos, quando o contador finaliza o tempo é mostrado um desafio de relaxamento corporal ou visual, onde o usuário pode ou não completa-lo, porém não é somente isso.</p>
      <p>Para incentivar o usuário a efetuar os exercicios de relaxamento foi adicionado um sistema de leveling, ou seja quando o usuario completa determinada atividade o mesmo recebe uma quantia de xp, quando ele atinge determinado montante de xp ele adquire um nível, fornecendo ao usuario um sentimento de recompensa.</p>
      <p>Esse foi um resumo um pouco estendido do projeto, espero que goste! - Acesse os links logo abaixo e saiba mais ou teste esse projeto você mesmo.</p>
    `,
  },
  {
    title: "Mural digital",
    categories: ["api", "web", "mobile"],
    abstract: "Um sistema para informar e alertar anúncios e notícias para os funcionários da empresa!",
    icon: "/portfolio/muraldigital/muraldigital-icon.webp",
    thumbnail: "/portfolio/muraldigital/muraldigital-thumbnail.webp",
    url: "/portfolio/mural-digital",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      website: "https://www.rallymotosmural.ml/",
      github: "https://github.com/EddyPBR/mural-digital",
    },
    content: `
      <p>Este projeto consiste em um sistema completo, com servidor, página web e aplicativo. O objetivo deste projeto é de informar os empregados de empresas/companias diminuindo ruídos de informações entre o RH e Diretoria para com o funcionário.</p>
      <p>Quanto ao funcionamento, os empregados possuem o app instalado em seus smartphones, e a diretoria e RH cadastram novos avisos na plataforma web, quando é cadastrado um novo anúncio na plataforma é disparada uma notificação para o app, ou seja todos os funcionários recebem uma notificação de uma nova notícia</p>
      <p>Esse foi um resumo do projeto, espero que goste! - Acesse os links logo abaixo e saiba mais ou teste esse projeto você mesmo.</p>
    `,
  },
  {
    title: "Codebacker",
    categories: ["api", "mobile"],
    abstract: "Um aplicativo para controle do carregamento de produtos em veículos empresariais!",
    icon: "/portfolio/codebacker/codebacker-icon.webp",
    thumbnail: "/portfolio/codebacker/codebacker-thumbnail.webp",
    url: "/portfolio/codebacker",
    team: ["Edvaldo Junior (EddyPBR)"],
    otherLinks: {
      github: "https://github.com/EddyPBR/codebacker",
    },
    content: `
      <p>O Codebacker é um projeto um tanto quanto especifico, então vou resumir a situação/problema existente do meu cliente. O meu cliente (empresa) tem que fazer o carregamento de determinados produtos em seus veículos de frota, porém são muitos produtos e caixas de produtos, e eles são identificados por um código de barras, em algumas situações os funcionários acabavam se confundindo e trocavam os produtos ou até mesmo esqueciam de alguns.</p>
      <p>Então já se pode imaginar a situação, isso para o cliente é um erro gravissímo, então, foi necessário automatizar esse processo, e ai que entra o Codebacker. O Codebacker nada mais é que um aplicativo que se comunica com um servidor e busca determinado carregamento no sistema, ele obtem então uma lista dos produtos que devem ser carregados no veículo. Após isso o funcionário responsável começa a fazer uma checklist de leitura dos códigos de barras com o seu proprio smartphone, o que já fornece em tempo real os produtos carregados, repetidos e errados.</p>
      <p>Esse foi um resumo do projeto, espero que goste! - Acesse os links logo abaixo e saiba mais ou teste esse projeto você mesmo.</p>
    `
  }
];
