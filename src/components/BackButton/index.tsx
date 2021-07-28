import { useRouter } from "next/router";
import { TiArrowBack } from "react-icons/ti";

import { Button } from "./styles";

export function BackButton() {
  const router = useRouter();

  function handleNavigateBack() {
    router.back();
  }

  return(
    <Button onClick={handleNavigateBack}>
      <TiArrowBack />
    </Button>
  )
}