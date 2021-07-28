import Link from "next/link";

import { Card } from "./styles";

type BlogGridCardProps = {
  thumbnail: string;
  title: string;
  authors: string[];
  createdAt: string;
  abstract: string;
  url: string;
};

export function BlogGridCard({ thumbnail, title, authors, createdAt, abstract, url }: BlogGridCardProps) {
  return(
    <Card>
      <Link href={url}>
        <a>
          <img src={thumbnail} alt={`${title}, por ${authors}`} />
        </a>
      </Link>
      <div>
        <span>{createdAt}</span>
        <h1>{title}</h1>
        <p>{abstract}</p>
        <span>por: <strong>{authors}</strong></span>
      </div>
    </Card> 
  );
}