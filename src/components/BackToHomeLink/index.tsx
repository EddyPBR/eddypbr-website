import Link from "next/link";
import { TiHome } from "react-icons/ti";

import { Home } from "./styles";

export function BackToHomeLink() {
  return (
    <Link href="/">
      <Home>
        <TiHome />
      </Home>
    </Link>
  );
}
