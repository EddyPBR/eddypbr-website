import Head from "next/head";

import { Badge } from "../../components/Badge";
import { ExternalLink } from "../../components/ExternalLink";

import { Container, ProjectHead, ProjectContent, ProjectBody, ProjectFooter } from "../../styles/Project";

export default function Letmeask() {
  const project = {
    title: "Letmeask",
    categories: ["web", "pwa"],
    thumbnail: "/projects/letmeask/letmeask-thumbnail.jpg",
  };
  
  return(
    <>
      <Head>
        <title>{project.title} | EddyPBR</title>
      </Head>

      <Container>
        <ProjectHead bgUrl={project.thumbnail} />
        <ProjectContent>
          <ProjectBody>
            <h1>{project.title}</h1>
            <div>
              <Badge color="#63B4FF" title="Api" />
              <Badge color="#E3216D" title="Website" />
              <Badge color="#6C63FF" title="Mobile" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu 
              aliquet convallis gravida risus. Ultrices sit ornare curabitur 
              sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. Metus 
              amet est pellentesque quis gravida semper eget faucibus. 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu 
              aliquet convallis gravida risus. Ultrices sit ornare curabitur 
              sagittis feugiat ac. Iaculis eu enim tellus mattis laoreet. 
            </p>
          </ProjectBody>
          <ProjectFooter>
            <div>
              <strong>Equipe:</strong>
              <cite>&ndash; Edvaldo Junior (EddyPBR)</cite>
            </div>
            <div>
              <ExternalLink website="https://letmeask-virid.vercel.app/" />
              <ExternalLink github="https://github.com/EddyPBR/letmeask" />
              <ExternalLink youtube="https://www.youtube.com/watch?v=a7P--fnjtzE" />
            </div>
          </ProjectFooter>
        </ProjectContent>
      </Container>
    </>
  );
}
