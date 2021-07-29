import { useRouter } from "next/router";
import { TiArrowBack } from "react-icons/ti";

import { Button } from "./styles";

type BackButtonProps = {
  url?: string;
}

export function BackButton({ url }: BackButtonProps) {
  const router = useRouter();

  function handleNavigateBack() {
    url ? router.push(url) : router.back();
  }

  return(
    <Button onClick={handleNavigateBack}>
      <TiArrowBack />
    </Button>
  )
}