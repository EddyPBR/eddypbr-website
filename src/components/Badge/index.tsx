import { BadgeStyle } from "./styles";

type BadgeProps = {
  title: string;
  color: string;
}

export function Badge({ title, color }: BadgeProps) {
  return (
    <BadgeStyle color={color}>{title}</BadgeStyle>
  )
};
