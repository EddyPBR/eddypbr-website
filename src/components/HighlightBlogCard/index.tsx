import Link from "next/link";

import { Badge } from "../Badge";

import { Card } from "./styles";

type HighlightBlogCardProps = {
  thumbnail: string;
  title: string;
  tags: string[];
  authors: string[];
  createdAt: string;
  abstract: string;
  url: string;
};

export function HighlightBlogCard({ thumbnail, title, tags, authors, createdAt, abstract, url }: HighlightBlogCardProps) {
  return (
    <Card>
      <Link href={url}>
        <a>
          <img src={thumbnail} alt={`${title}, por ${authors}`} width={510} height={358} />
        </a>
      </Link>
      <div>
        <span>{createdAt}</span>
        <h1>{title}</h1>
        <small>
          {
            tags.map((tag, key) => <Badge key={key} type={tag} />)
          }
        </small>
        <p>{abstract}</p>
        <span>por: <strong>{authors}</strong></span>
      </div>
    </Card>
  )
}
