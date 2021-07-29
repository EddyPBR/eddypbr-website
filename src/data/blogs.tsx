export type BlogType = {
  title: string;
  tags: string[];
  abstract: string;
  thumbnail: string;
  url: string;
  authors: string[];
  createdAt: string;
  otherLinks: BlogOtherLinksType;
  content: string;
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
    title: "A importância do linkedin como ferramenta profissional",
    tags: ["linkedin", "trabalho"],
    abstract: "Se você não conhece o Linkedin e como essa rede social pode lhe ajudar, acesse agora este post!",
    thumbnail: "/blogs/a-importancia-do-linkedin-como-ferramenta-profissional/thumbnail.jpg",
    url: "/blog/a-importancia-do-linkedin-como-ferramenta-profissional",
    authors: ["Edvaldo Junior (EddyPBR)"],
    createdAt: "29 de Julho, 2021",
    otherLinks: {
      linkedin: "https://www.linkedin.com/in/eddypbr/",
    },
    content: `
      <h2>Resumo</h2>
      <p>Se você não conhece o linkedin e/ou não sabe como essa rede social pode ajudar a você a conseguir um emprego ou prestígio profissional, você está no post certo!</p>

      <h2>O Linkedin</h2>
      <p>Como muitos já devem saber, o Linkedin é uma rede social, porém ao contrário das outras grandes redes sociais como facebook e instagram, o foco do linkedin não é o entretenimento, mas sim seu networking profissional.</p>
      <p>Como colocado pelo próprio Linkedin em seu website, a sua missão é <i>“conectar profissionais do mundo todo, tornando-os mais produtivos e bem-sucedidos.”</i>, e de fato é de grande ajuda, e vai muito além do networking, na plataforma é comum encontrar “cases” no trabalho de outros profissionais da sua área, ou conteúdos informativos como este que você está lendo, o que por sua vez ajuda bastante no aprendizado da sua área.</p>
      <p>Mas como dito o foco é o networking, além dos posts de <i>“cases”</i> e conteúdos informativos citados anteriormente, o linkedin possui mecanismos de recrutamento de pessoal, onde as empresas podem abrir vagas informando as competências necessárias, desejadas, destacáveis, salário e afins, e você pode se inscrever fácilmente para essas vagas.</p>
      <p>E isso sem falar nos recrutadores, que estão a todo o vapor procurando profissionais que se enquadrem no perfil da empresa em que trabalham e possuam as competências necessárias.</p>

      <h2>Como possuir uma conta linkedin?</h2>
      <p>Essa parte é bem simples, basta acessar o <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">site do linkedin</a>, clicar em cadastrar, informar o que se pede e pronto você já tem sua conta do linkedin! mas claramente não se pode parar por aqui. É necessário personalizar o seu perfil para atrair a atenção de outros profissionais e recrutadores.</p>
      <p>Infelizmente criar um perfil nota 10 no linkedin não é o objetivo deste post, mas para personalizar o seu perfil e criar um perfil nota 10! Existem diversos conteúdos na internet, youtube que podem te ajudar, eu mesmo já utilizei bastante esses tutoriais então vale a pena perder 5 minutinhos procurando sobre isso.</p>

      <h2>Por hoje é só pessoal</h2>
      <p>Bem essa era mais uma introdução ao Linkedin, curto simples e objetivo, espero que tenha gostado do conteúdo, compartilhe com outras pessoas que ainda não conhecem a rede social, e me segue no Linkedin também, tem um link logo abaixo deste post.</p>

      <p>É isso, até a próxima!</p>
    `,
  },
];
