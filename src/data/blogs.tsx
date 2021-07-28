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
    title: "Como desenvolvi este site com NextJS #1",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/desenvolvimento-de-paginas-estaticas-com-nextjs-#1",
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
    title: "Como desenvolvi este site com NextJS #2",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/desenvolvimento-de-paginas-estaticas-com-nextjs-#2",
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
    title: "Como desenvolvi este site com NextJS #3",
    tags: ["react", "typescript", "nextjs"],
    abstract: "Aqui irei falar sobre como desenvolvi este projeto, tecnologias utilizadas e como consegui inspiração para o design.",
    thumbnail: "/blogs/desenvolvimento-de-paginas-estaticas-com-nextjs/thumbnail.jpg",
    url: "/blog/desenvolvimento-de-paginas-estaticas-com-nextjs-#3",
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
