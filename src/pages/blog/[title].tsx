import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { blogs, BlogType } from "../../data/blogs";

import { Badge } from "../../components/Badge";
import { ExternalLink } from "../../components/ExternalLink";
import { BackButton } from "../../components/BackButton";

import { Container, PostHead, PostBody, ContentHead, ContentBody, ContentFooter } from "../../styles/Post";

export default function Letmeask({ blog }: { blog: BlogType }) {
  return(
    <>
      <Head>
        <title>{blog.title} | EddyPBR</title>
      </Head>

      <Container>
        <PostHead bgUrl={blog.thumbnail} />
        <PostBody>
          <article>
            <ContentHead>
              <h1>{blog.title}</h1>
              <div>
                {
                  blog.tags.map((category, index) => <Badge key={index} type={category} />)
                }
              </div>
            </ContentHead>

            <ContentBody dangerouslySetInnerHTML={{ __html: blog.content }} />

            <ContentFooter>
              <div>
                <strong>Autor:</strong>
                {
                  blog.authors.map((member, index) => <cite key={index}>&ndash; {member}</cite>)
                }
              </div>
              <div>
                {
                  Object.keys(blog.otherLinks).map((atribute, index) =>
                    <ExternalLink key={index} type={atribute} url={blog.otherLinks[atribute]} />
                  )
                }
              </div>
            </ContentFooter>
          </article>
        </PostBody>
      </Container>

      <BackButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = blogs.find((blog) => { 
    const titleToUrl = blog.title.toLocaleLowerCase().split(" ").join("-").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    if(titleToUrl === params.title) {
      return titleToUrl;
    };
  });

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => {
    return {
      params: {
        title: blog.title.toLowerCase().split(" ").join("-"),
      }
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
