import Image from "next/image";
import { Card } from "./styles";

type TestimonialCardProps = {
  imageUrl: string;
  author: string;
  occupation: string;
  comment: string;
}

export function TestimonialCard({ imageUrl, author, occupation, comment }: TestimonialCardProps) {
  return (
    <Card>
      <div>
        <Image src={imageUrl} alt={`Comentário de ${author}`} height={56} width={56}/>
        <div>
          <cite>{author}</cite>
          <span>{occupation}</span>
        </div>
      </div>
      <figcaption>{comment}</figcaption>
    </Card>
  )
};
