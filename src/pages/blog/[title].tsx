import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { blogs, BlogType } from "../../data/blogs";

export default function Letmeask({ blog }: { blog: BlogType }) {
  console.log(blog);

  return(
    <>
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
