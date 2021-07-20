import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"

import { BlogCard, BlogCardProps } from "../BlogCard";

import { Blogs, Carousel, Controlls } from "./styles";

type BlogAsideProps = {
  blogs: BlogCardProps[];
}

export function BlogAside({ blogs }: BlogAsideProps ) {
  const [items, setItems] = useState(blogs);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateNext, setAnimateNext] = useState(false);
  const [animatePrev, setAnimatePrev] = useState(false);

  async function nextItem() {
    setIsAnimating(true);

    const copiedItems = items.map((item) => item);
    const firstItem = copiedItems[0];

    copiedItems.shift();
    copiedItems.push(firstItem);

    setAnimateNext(true);

    setTimeout(() => { 
      setAnimateNext(false);
      setIsAnimating(false);
      setItems(copiedItems);
    }, 1000);
  }

  function previousItem() {
    setIsAnimating(true);

    const copiedItems = items.map((item) => item);
    const lastItem = copiedItems[copiedItems.length - 1];
 
    copiedItems.pop();
    copiedItems.unshift(lastItem);

    setItems(copiedItems);
    setAnimatePrev(true);

    setTimeout(() => { 
      setAnimatePrev(false);
      setIsAnimating(false);
    }, 1000);
  }

  return (
    <Blogs>
      <Controlls>
        <button type="button" onClick={nextItem} disabled={isAnimating}><AiOutlineArrowUp /></button>
        <button type="button" onClick={previousItem} disabled={isAnimating}><AiOutlineArrowDown /></button>
      </Controlls>
      <Carousel animateNext={animateNext} animatePrev={animatePrev}>
        {
          items.map(({ title, url, imgUrl }, index) => <BlogCard key={index} title={title} url={url} imgUrl={imgUrl} />)
        }
      </Carousel>
    </Blogs>
  );
}
