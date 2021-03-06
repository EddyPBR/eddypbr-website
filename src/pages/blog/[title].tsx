import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { sanitize } from "isomorphic-dompurify";
import { blogs, BlogType } from "../../data/blogs";
import { parseStringToDashedUrl } from "../../utils/parseStringToDashedUrl";

import { SEO } from "../../components/SEO";
import { Badge } from "../../components/Badge";
import { ExternalLink } from "../../components/ExternalLink";
import { BackButton } from "../../components/BackButton";
import { ShareButton } from "../../components/ShareButton";

import { Container, PostHead, PostBody, ContentHead, ContentBody, ContentFooter } from "../../styles/Post";

export default function Letmeask({ blog }: { blog: BlogType }) {
  const sanitizedContent = { 
    __html: sanitize(blog.content),
  }

  const href = blog.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f:,?-]/g, '').split(" ").join("-");

  return(
    <>
      <Head>
        <title>{blog.title} | EddyPBR</title>
        <SEO 
          title={`${blog.title || "EddyPBR - Blog"}`}
          description={blog.abstract}
          url={`${process.env.NEXT_PUBLIC_VERCEL_URL}/blog/${href}`}
          urlImage={`${process.env.NEXT_PUBLIC_VERCEL_URL}${blog.thumbnail}`}
          type="article"
          articleOgg={{
            publishedAt: blog.createdAt,
            modifiedAt: blog.updatedAt,
            tagContent: blog.tags
          }}
        />
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

            <ContentBody dangerouslySetInnerHTML={sanitizedContent} />

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

      <ShareButton facebook copyUrl twitter />

      <BackButton url="../blog" />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = blogs.find((blog) => { 
    const titleToUrl = parseStringToDashedUrl(blog.title);
    
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
        title: parseStringToDashedUrl(blog.title),
      }
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
