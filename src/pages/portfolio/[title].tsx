import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { sanitize } from "isomorphic-dompurify";
import { projects, ProjectType } from "../../data/projects";

import { SEO } from "../../components/SEO";
import { Badge } from "../../components/Badge";
import { ExternalLink } from "../../components/ExternalLink";
import { ShareButton } from "../../components/ShareButton";
import { BackButton } from "../../components/BackButton";

import { Container, PostHead, PostBody, ContentHead, ContentBody, ContentFooter } from "../../styles/Post";

export default function Letmeask({ project }: { project: ProjectType }) {
  const sanitizedContent = { 
    __html: sanitize(project.content),
  }

  const href = project.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f:,?-]/g, '').split(" ").join("-");

  return (
    <>
      <Head>
        <title>{project.title} | EddyPBR</title>
        <SEO 
          title={`EddyPBR - Projeto: ${project.title}`}
          description={project.abstract}
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${href}`}
          urlImage={`${process.env.NEXT_PUBLIC_BASE_URL}${project.thumbnail}`}
          type="website"
        />
      </Head>

      <Container>
        <PostHead bgUrl={project.thumbnail} />
        <PostBody>
          <article>
            <ContentHead>
              <h1>{project.title}</h1>
              <div>
                {
                  project.categories.map((category, index) => <Badge key={index} type={category} />)
                }
              </div>
            </ContentHead>

            <ContentBody dangerouslySetInnerHTML={sanitizedContent} />

            <ContentFooter>
              <div>
                <strong>Equipe:</strong>
                {
                  project.team.map((member, index) => <cite key={index}>&ndash; {member}</cite>)
                }
              </div>
              <div>
                {
                  Object.keys(project.otherLinks).map((atribute, index) =>
                    <ExternalLink key={index} type={atribute} url={project.otherLinks[atribute]} />
                  )
                }
              </div>
            </ContentFooter>
          </article>
        </PostBody>
      </Container>

      <ShareButton facebook copyUrl twitter />

      <BackButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((project) => { 
    const titleToUrl = project.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f:,?-]/g, '').split(" ").join("-");
    
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
        title: project.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f:,?-]/g, '').split(" ").join("-"),
      }
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
