import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { projects, ProjectType } from "../../data/projects";

import { Badge } from "../../components/Badge";
import { ExternalLink } from "../../components/ExternalLink";
import { BackButton } from "../../components/BackButton";

import { Container, ProjectHead, ProjectContent, ProjectBody, ProjectFooter } from "../../styles/Project";

export default function Letmeask({ project }: { project: ProjectType }) {
  return (
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
              {
                project.categories.map((category, index) => <Badge key={index} type={category} />)
              }
            </div>
            {
              project.content.map((data, index) => {
                if (data.type === "text") {
                  return <p key={index}>{data.data}</p>
                }
              })
            }
          </ProjectBody>
          <ProjectFooter>
            <div>
              <strong>Equipe:</strong>
              {
                project.team.map((member) => <cite>&ndash; {member}</cite>)
              }
            </div>
            <div>
              {
                Object.keys(project.otherLinks).map((atribute, index) =>
                  <ExternalLink key={index} type={atribute} url={project.otherLinks[atribute]} />
                )
              }
            </div>
          </ProjectFooter>
        </ProjectContent>
      </Container>

      <BackButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((project) => { 
    const titleToUrl = project.title.toLocaleLowerCase().split(" ").join("-").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    if(titleToUrl === params.title) {
      return titleToUrl;
    };
  });

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => {
    return {
      params: {
        title: project.title.toLowerCase().split(" ").join("-"),
      }
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
