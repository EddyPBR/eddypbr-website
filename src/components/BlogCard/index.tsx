import Link from "next/link";

import { Card } from "./styles";

type BlogCardProps = {
  title: string;
  url: string;
}

export function BlogCard({ title, url }: BlogCardProps) {
  return(
    <Card>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" alt="test" />

      <div>
        <strong>{title}</strong>
        <Link href={url}>
          <a>Ver post</a>
        </Link>
      </div>
    </Card>
  );
}
