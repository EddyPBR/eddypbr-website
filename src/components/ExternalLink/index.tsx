import { Link } from "./styles";

import { FaSitemap, FaGithub, FaLinkedinIn, FaGooglePlay, FaApple, FaFacebookF, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

type ExternalLinkProps = {
  website?: string;
  github?: string;
  linkedin?: string;
  googlePlay?: string;
  appleStore?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export function ExternalLink(props: ExternalLinkProps) {
  return(
    <>
      { props.website && <Link href={props.website} rel="noopener noreferrer" target="_blank"><FaSitemap /></Link> }
      { props.github && <Link href={props.github} rel="noopener noreferrer" target="_blank"><FaGithub /></Link> }
      { props.linkedin && <Link href={props.linkedin} rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></Link> }
      { props.googlePlay && <Link href={props.googlePlay} rel="noopener noreferrer" target="_blank"><FaGooglePlay /></Link> }
      { props.appleStore && <Link href={props.appleStore} rel="noopener noreferrer" target="_blank"><FaApple /></Link> }
      { props.facebook && <Link href={props.facebook} rel="noopener noreferrer" target="_blank"><FaFacebookF /></Link> }
      { props.instagram && <Link href={props.instagram} rel="noopener noreferrer" target="_blank"><FaInstagram /></Link> }
      { props.youtube && <Link href={props.youtube} rel="noopener noreferrer" target="_blank"><FaYoutube /></Link> }
      { props.twitter && <Link href={props.twitter} rel="noopener noreferrer" target="_blank"><FaTwitter /></Link> }
    </>
  );
}
