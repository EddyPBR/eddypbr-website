import { Card } from "./styles";
import Image from "next/image";

type SkillCardProps = {
  title: string;
  text: string;
  color: string;
  imgUrl: string;
}

export function SkillCard({ title, text, color, imgUrl }: SkillCardProps) {
  return(
    <Card color={color}>
      <div>
        <Image src={imgUrl} alt={title} width={52} height={52} />
        <strong>{title}</strong>
      </div>
      <p>{text}</p>
    </Card>
  );
}
