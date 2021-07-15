import Link from "next/link";

import { Nav } from "./styles";

export function Navbar() {
  return(
    <Nav>
      <Link href="#">
        <a>
          Home
        </a>
      </Link>

      <Link href="#">
        <a>
          Blog
        </a>
      </Link>

      <Link href="#">
        <a>
          Portfólio
        </a>
      </Link>

      <Link href="#">
        <a>
          Feedback
        </a>
      </Link>

      <Link href="#">
        <a>
          Contato
        </a>
      </Link>
    </Nav>
  );
}