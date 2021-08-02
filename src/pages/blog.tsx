import { GetStaticProps } from "next";
import Head from "next/head";

import { useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

import { blogs } from "../data/blogs";
import { parseISO, formatDistanceToNow } from "date-fns";
import pt from "date-fns/locale/pt";

import { HighlightBlogCard } from "../components/HighlightBlogCard";
import { BlogGridCard } from "../components/BlogGridCard";
import { BackToHomeLink } from "../components/BackToHomeLink";

import { Container, SearchBar, Blogs, BlogGrid } from "../styles/Blog";

type BlogType = {
  thumbnail: string;
  title: string;
  tags: string[];
  authors: string[];
  createdAt: string;
  abstract: string;
  url: string;
};

export default function Blog({ blogs }: { blogs: BlogType[] }) {
  const [query, setQuery] = useState("");
  const [filteredBlogs, SetFilteredBlogs] = useState<BlogType[] | undefined>();

  function handleFilter(event: FormEvent) {
    event.preventDefault();

    if(!query) {
      SetFilteredBlogs(undefined);
      return;
    }

    const includesTitle = (title: string, query: string): boolean => title.toLowerCase().includes(query.toLowerCase());
    const includesTags = (tags: string[], query: string): boolean => tags.includes(query.toLowerCase());
    
    const blogsFiltered = blogs.filter((blog) => includesTitle(blog.title, query) || includesTags(blog.tags, query));
    SetFilteredBlogs(blogsFiltered);
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
          {
            !filteredBlogs && (
              <HighlightBlogCard
                thumbnail={blogs[0].thumbnail}
                title={blogs[0].title}
                tags={blogs[0].tags}
                authors={blogs[0].authors}
                createdAt={`há ${formatDistanceToNow( parseISO(blogs[0].createdAt), { locale: pt } )}`}
                abstract={blogs[0].abstract}
                url={blogs[0].url} 
              />
            )
          }
          <BlogGrid hideFirstElement={!filteredBlogs}>
            {
              !filteredBlogs
                ? (
                  blogs.map((blog, index) => 
                    <BlogGridCard
                      key={index}
                      thumbnail={blog.thumbnail}
                      title={blog.title}
                      tags={blog.tags}
                      authors={blog.authors}
                      createdAt={`há ${formatDistanceToNow( parseISO(blog.createdAt), { locale: pt } )}`}
                      abstract={blog.abstract}
                      url={blog.url}
                    />
                  )
                )
                : (
                  filteredBlogs.map((blog, index) => 
                    <BlogGridCard
                      key={index}
                      thumbnail={blog.thumbnail}
                      title={blog.title}
                      tags={blog.tags}
                      authors={blog.authors}
                      createdAt={`há ${formatDistanceToNow( parseISO(blog.createdAt), { locale: pt } )}`}
                      abstract={blog.abstract}
                      url={blog.url} 
                    />
                  )
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
  const blogsWithFilteredAtributes = blogs.map((blog) => {
    return({
      thumbnail: blog.thumbnail,
      title: blog.title,
      tags: blog.tags,
      authors: blog.authors,
      createdAt: blog.createdAt,
      abstract: blog.abstract,
      url: blog.url,
    });
  });

  return {
    props: {
      blogs: blogsWithFilteredAtributes,
    },
  };
};
