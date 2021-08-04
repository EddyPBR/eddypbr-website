import Link from "next/link";
import Image from "next/image";

import { Badge } from "../Badge";

import { Card } from "./styles";

type BlogGridCardProps = {
  thumbnail: string;
  title: string;
  tags: string[];
  authors: string[];
  createdAt: string;
  abstract: string;
  url: string;
};

export function BlogGridCard({ thumbnail, title, tags, authors, createdAt, abstract, url }: BlogGridCardProps) {
  return(
    <Card>
      <Link href={url}>
        <a>
          <Image src={thumbnail} alt={`${title}, por ${authors}`} width={296} height={208} />
        </a>
      </Link>
      <div>
        <span>{createdAt}</span>
        <h1>{title}</h1>
        <small>
          {
            tags.map((tag, index) =>  <Badge key={index} type={tag} />)
          }
        </small>
        <p>{abstract}</p>
        <span>por: <strong>{authors}</strong></span>
      </div>
    </Card> 
  );
}
