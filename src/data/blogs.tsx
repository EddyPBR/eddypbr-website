export type BlogType = {
  title: string;
  tags: string[];
  abstract: string;
  thumbnail: string;
  url: string;
  authors: string[];
  createdAt: string;
  otherLinks: BlogOtherLinksType;
  content: BlogContentType[];
}

export type BlogContentType = {
  type: "text" | "image" | "video" | "code";
  data: string;
}

export type BlogOtherLinksType = {
  website?: string;
  github?: string;
  youtube?: string;
  googlePlay?: string;
  appleStore?: string;
}

export const blogs = [
  {
    title: "Desenvolvimento de páginas estáticas com NextJS",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/desenvolvimento-de-paginas-estaticas-com-nextjs",
    authors: ["Edvaldo Junior (EddyPBR)"],
    createdAt: "28 de Julho, 2021",
    otherLinks: {
      github: "https://github.com/EddyPBR/letmeask",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
    ],
  },
  {
    title: "Configurando typescript para projetos com NextJS",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/configurando-typescript-para-projetos-com-nextjs",
    authors: ["Edvaldo Junior (EddyPBR)"],
    createdAt: "28 de Julho, 2021",
    otherLinks: {
      github: "https://github.com/EddyPBR/letmeask",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
    ],
  },
  {
    title: "Gerando páginas estáticas com NextJS",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/gerando-paginas-estaticas-com-nextjs",
    authors: ["Edvaldo Junior (EddyPBR)"],
    createdAt: "28 de Julho, 2021",
    otherLinks: {
      github: "https://github.com/EddyPBR/letmeask",
    },
    content: [
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim."
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
      {
        type: "text",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis euismod ipsum donec magna elementum leo facilisis maecenas enim.",
      },
    ],
  },
];
