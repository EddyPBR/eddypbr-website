import Link from "next/link";

import { Card } from "./styles";

export type BlogCardProps = {
  title: string;
  thumbnail: string;
  url: string;
}

export function BlogCard({ title, thumbnail, url }: BlogCardProps) {
  return(
    <Card>
      <img src={thumbnail} alt={title} width={270} height={190} loading="lazy" />

      <div>
        <strong>{title}</strong>
        <Link href={url}>
          <a>Ver post</a>
        </Link>
      </div>
    </Card>
  );
}
