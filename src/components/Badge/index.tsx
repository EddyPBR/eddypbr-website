import { BadgeStyle } from "./styles";

type BadgeProps = {
  type: string;
}

export function Badge({ type }: BadgeProps) {
  return (
    <BadgeStyle type={type}>{type}</BadgeStyle>
  )
};
