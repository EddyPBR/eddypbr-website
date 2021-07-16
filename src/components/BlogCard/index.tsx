import Link from "next/link";

import { Card } from "./styles";

export type BlogCardProps = {
  title: string;
  url: string;
  imgUrl: string;
}

export function BlogCard({ title, url, imgUrl }: BlogCardProps) {
  return(
    <Card>
      <img src={imgUrl} alt="test" />

      <div>
        <strong>{title}</strong>
        <Link href={url}>
          <a>Ver post</a>
        </Link>
      </div>
    </Card>
  );
}
