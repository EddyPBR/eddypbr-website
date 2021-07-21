import Link from "next/link";

import { Nav } from "./styles";

export function Navbar() {
  return(
    <Nav>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>

      <Link href="/blog">
        <a>
          Blog
        </a>
      </Link>

      <Link href="/portfolio">
        <a>
          Portfólio
        </a>
      </Link>

      <Link href="#feedback">
        <a>
          Feedback
        </a>
      </Link>

      <Link href="/contato">
        <a>
          Contato
        </a>
      </Link>
    </Nav>
  );
}