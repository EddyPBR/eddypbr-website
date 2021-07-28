import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

import { HighlightBlogCard } from "../components/HighlightBlogCard";
import { BlogGridCard } from "../components/BlogGridCard";
import { BackToHomeLink } from "../components/BackToHomeLink";

import { blogs, BlogType } from "../data/blogs";

import { Container, SearchBar, Blogs, BlogGrid } from "../styles/Blog";

export default function Blog({ blogs }: { blogs: BlogType[] }) {
  const [query, setQuery] = useState("");

  function handleFilter(event: FormEvent) {
    event.preventDefault();
    // ...
  }

  return (
    <>
      <Head>
        <title>Blog | EddyPBR</title>
      </Head>

      <Container>
        <form method="GET" onSubmit={handleFilter}>
          <SearchBar>
            <input placeholder="Buscar..." type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
            <button type="submit">
              <FaSearch />
            </button>
          </SearchBar>
        </form>

        <Blogs>
          <HighlightBlogCard
            thumbnail={blogs[0].thumbnail}
            title={blogs[0].title}
            authors={blogs[0].authors}
            createdAt={blogs[0].createdAt}
            abstract={blogs[0].abstract}
            url={blogs[0].url} 
          />
          <BlogGrid>
            {
              blogs.map((blog, index) => 
                <BlogGridCard
                  key={index}
                  thumbnail={blog.thumbnail}
                  title={blog.title}
                  authors={blog.authors}
                  createdAt={blog.createdAt}
                  abstract={blog.abstract}
                  url={blog.url} 
                />
              )
            }
          </BlogGrid>
        </Blogs>
      </Container>

      <BackToHomeLink />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blogs,
    },
  };
};
