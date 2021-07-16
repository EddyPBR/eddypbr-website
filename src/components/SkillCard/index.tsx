import { Card } from "./styles";

type SkillCardProps = {
  title: string;
  text: string;
  color: string;
  imgUrl: string;
}

export function SkillCard({ title, text, color, imgUrl }: SkillCardProps) {
  return(
    <Card color={color}>
      <header>
        <img src={imgUrl} alt={title} />
        <strong>{title}</strong>
      </header>
      <p>{text}</p>
    </Card>
  );
}
