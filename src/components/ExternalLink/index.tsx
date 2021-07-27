import { Link } from "./styles";

import { FaSitemap, FaGithub, FaLinkedinIn, FaGooglePlay, FaApple, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

type ExternalLinkProps = {
  type: string;
  url: string;
}

export function ExternalLink({ type, url }: ExternalLinkProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      {type === "website" && <FaSitemap />}
      {type === "github" && <FaGithub />}
      {type === "linkedin" && <FaLinkedinIn />}
      {type === "googlePlay" && <FaGooglePlay />}
      {type === "appleStore" && <FaApple />}
      {type === "facebook" && <FaFacebookF />}
      {type === "instagram" && <FaInstagram />}
      {type === "youtube" && <FaYoutube />}
      {type === "twitter" && <FaTwitter />}
    </Link>
  );
}
