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
      <h2>Sumário</h2>

      <ul>
        <li><a href="#resumo">Resumo</a></li>
        <li><a href="#o-linkedin">O Linkedin</a></li>
        <li><a href="#como-possuir-uma-conta-linkedin">Como possuir uma conta linkedin?</a></li>
        <li><a href="#por-hoje-e-so-pessoal">Por hoje é só pessoal</a></li>
      </ul>

      <h2 id="resumo">Resumo</h2>
      <p>Se você não conhece o linkedin e/ou não sabe como essa rede social pode ajudar a você a conseguir um emprego ou prestígio profissional, você está no post certo!</p>

      <h2 id="o-linkedin">O Linkedin</h2>
      <p>Como muitos já devem saber, o Linkedin é uma rede social, porém ao contrário das outras grandes redes sociais como facebook e instagram, o foco do linkedin não é o entretenimento, mas sim seu networking profissional.</p>
      <p>Como colocado pelo próprio Linkedin em seu website, a sua missão é <i>“conectar profissionais do mundo todo, tornando-os mais produtivos e bem-sucedidos.”</i>, e de fato é de grande ajuda, e vai muito além do networking, na plataforma é comum encontrar “cases” no trabalho de outros profissionais da sua área, ou conteúdos informativos como este que você está lendo, o que por sua vez ajuda bastante no aprendizado da sua área.</p>
      <p>Mas como dito o foco é o networking, além dos posts de <i>“cases”</i> e conteúdos informativos citados anteriormente, o linkedin possui mecanismos de recrutamento de pessoal, onde as empresas podem abrir vagas informando as competências necessárias, desejadas, destacáveis, salário e afins, e você pode se inscrever fácilmente para essas vagas.</p>
      <p>E isso sem falar nos recrutadores, que estão a todo o vapor procurando profissionais que se enquadrem no perfil da empresa em que trabalham e possuam as competências necessárias.</p>

      <h2 id="como-possuir-uma-conta-linkedin">Como possuir uma conta linkedin?</h2>
      <p>Essa parte é bem simples, basta acessar o <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">site do linkedin</a>, clicar em cadastrar, informar o que se pede e pronto você já tem sua conta do linkedin! mas claramente não se pode parar por aqui. É necessário personalizar o seu perfil para atrair a atenção de outros profissionais e recrutadores.</p>
      <p>Infelizmente criar um perfil nota 10 no linkedin não é o objetivo deste post, mas para personalizar o seu perfil e criar um perfil nota 10! Existem diversos conteúdos na internet, youtube que podem te ajudar, eu mesmo já utilizei bastante esses tutoriais então vale a pena perder 5 minutinhos procurando sobre isso.</p>

      <h2 id="por-hoje-e-so-pessoal">Por hoje é só pessoal</h2>
      <p>Bem essa era mais uma introdução ao Linkedin, curto simples e objetivo, espero que tenha gostado do conteúdo, compartilhe com outras pessoas que ainda não conhecem a rede social, e me segue no Linkedin também, tem um link logo abaixo deste post.</p>

      <p>É isso, até a próxima!</p>
    `,
  },
  {
    title: "NextJS vs ReactJS - Qual, quando e porque utilizar?",
    tags: ["nextjs", "react"],
    abstract: "Por que grandes empresas como o Nubank e Magazine Luiza começaram a utilizar o NextJS?",
    thumbnail: "/blogs/nextjs-vs-reactjs--qual-quando-e-porque-utilizar/thumbnail.jpg",
    url: "/blog/nextjs-vs-reactjs--qual-quando-e-porque-utilizar",
    authors: ["Edvaldo Junior (EddyPBR)"],
    createdAt: "29 de Julho, 2021",
    otherLinks: {
      linkedin: "https://www.linkedin.com/in/eddypbr/",
    },
    content: `
      <h2>Sumário</h2>

      <ul>
        <li><a href="#resumo">Resumo</a></li>
        <li><a href="#desenvolvimento-web">Desenvolvimento web</a></li>
        <li><a href="#funcionamento-das-paginas-web">Funcionamento das páginas web</a></li>
        <li><a href="#react-e-seu-funcionamento">React e seu funcionamento</a></li>
        <li><a href="#o-surgimento-do-problema">O surgimento do problema</a></li>
        <li><a href="#nextjs-e-a-solucao">NextJS e a solução</a></li>
        <li><a href="#entao-nextjs-ou-reactjs">Então NextJS ou ReactJS?</a></li>
      </ul>

      <h2 id="resumo">Resumo</h2>
      <p>Por que grandes empresas como o Nubank e Magazine Luiza começaram a utilizar o NextJS? - Essa pergunta e outras mais serão respondidas neste blog!</p>
      
      <h2 id="desenvolvimento-web">Desenvolvimento web</h2>
      <p>Websites hoje são algo comum, quase como uma extensão de uma informação ou serviço para empresas, negócios e até mesmo uso pessoal, afinal, quantas vezes as pessoas não ouviram falar de determinado assunto, produto ou serviço e acabaram pesquisando na web e acabam se deparando com um site explicando tudo o que precisava saber.</p>
      <p>E é sobre esse tipo de pesquisa, que surgiu a luta entre React e Next JS. Então aguarda um pouquinho que vou explicar melhor nos tópicos seguintes. Mas sobre a construção de websites, um website é criado com html (estrutura), css (estilização) e JavaScript(comportamentos e funções) todos trabalhando em união entregando ao usuário uma interface de interação e informação.</p>
      
      <h2 id="funcionamento-das-paginas-web">Funcionamento das páginas web</h2>
      <p>Já parou para pensar sobre o que acontece quando carregamos uma página web? - Bem vou explicar utilizando esta página como exemplo, você possui nesse cenário o servidor e o cliente (seu navegador), quando você carregou esta página o servidor lhe retornou um conteúdo html + css + javascript, e esse conteúdo foi processado pelo seu navegador.</p>
      <p>O html ele é apenas um texto mais organizado e semântico, o css são as cores, tamanhos, posições e afins, e o javascript é o comportamento, então não necessariamente é preciso o css e javascript para entender uma página web, pois já se tem o conteúdo somente com o html, porém o css e o javascript facilitam e tornam possíveis as interações com a interface (como dar likes em posts e acessar um menu no website em tamanho mobile por exemplo), agora guarde a informação deste parágrafo.</p>
      
      <h2 id="react-e-seu-funcionamento">React e seu funcionamento</h2>
      <p>Segundo o próprio website do React <i>“O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.”</i>, pois bem o React utiliza da sintaxe de JSX para criar páginas html utilizando o JavaScript, com isso dividimos nosso projeto em componentes que possuem outros componentes filhos e cada um possuindo um estado e comportamento diferentes e que podem ser independentes ou não.</p>
      <p>Essa divisão permite a nós desenvolvedores replicamos componentes como botões, cabeçalhos e rodapés em entras páginas apenas com uma única importação, e sinceramente isso é incrível!</p>
      
      <h2 id="o-surgimento-do-problema">O surgimento do problema</h2>
      <p>O problema surge com o funcionamento do JavaScript, ainda lembra da informação que eu pedi para você guardar? - caso não lembre volte ao tópico de <b>Funcionamento das páginas web</b>. Então quando falamos do javascript quem o executa? - O browser, sendo assim você já consegue entender o problema.</p>
      <p>Foi dito que o html é a estrutura da página, e o React cria páginas a partir do javascript, então o que acontece com o html do React? - Resposta: O html do React é apenas uma estrutura muito básica de uma página html e que no seu &lt;body&gt; tem uma tag &lt;div id=”root”&gt; &lt;/div&gt;</code></pre> e que o navegador utilizando javascript insere o html dentro dessa tag. Em resumo, o html da página não é pré-existente e enviado para o cliente, ele é processado via javascript.</p>
      <p>Com esse processamento via javascript é que ocorrem os problemas de SEO (otimização de mecanismos de busca), os mecanismos de buscas em que nos referimos são bots que indexam páginas quando você procura algo na web o SEO é responsável por deixar um website no topo dessa listagem de milhares de páginas existentes, e qual negócio não quer estar no topo não é mesmo?</p>
      
      <h2 id="nextjs-e-a-solucao">NextJS e a solução</h2>
      <p>Para solucionar esse problema do SEO do React alguns mecanismos foram criados, mas o NextJS se tornou o mais promissor e atraiu bastante os olhares da comunidade, então de maneira resumida e objetiva, o NextJS utiliza o React também, porém ao contrário do React ele não retorna uma página praticamente em branco e deixa o cliente reproduzir esta página.</p>
      <p>O NextJS faz o processamento do React ainda no lado do servidor, então ele injeta o html + css + javascript e depois disso retorna ao cliente com tudo processado, e isso sem perder a questão do estado, comportamento e componentização.</p>
      <p>Não é o máximo!? Por esse motivo, e entre outros ainda tão legais quanto este, é que o NextJS vem conseguindo seu lugar no mercado, e sendo utilizado por grandes empresas como Nubank e Magazine Luiza.</p>
      
      <h2 id="entao-nextjs-ou-reactjs">Então NextJS ou ReactJS?</h2>
      <p>Então o NextJS é melhor que o React? - Não, e como dito o React tem problema de SEO, mas nem tudo precisa de SEO, alguns às vezes é melhor que não tenha mesmo. Por exemplo uma página administrativa de um sistema, ou um website de controle de pedidos de uma empresa que só roda em máquinas locais, basicamente tudo aquilo que não for necessário ser encontrado por sistemas de busca da web em sua maioria não precisa do NextJS.</p>
      <p>Por fim, é isso espero que tenha gostado! Caso queira se aprofundar aconselho a pesquisar mais sobre SPA, SSR e SSG</p>
    `,
  },
];
