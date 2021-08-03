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
      <div>
        <img src={imgUrl} alt={title} width="52" height="52" />
        <strong>{title}</strong>
      </div>
      <p>{text}</p>
    </Card>
  );
}
