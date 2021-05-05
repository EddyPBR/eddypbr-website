import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import styles from "./styles.module.scss";

type socialLinksProps = {
  github?: string;
  instagram?: string;
  linkedin?: string;
};

export default function SocialLinks({ github, instagram, linkedin }: socialLinksProps) {
  return (
    <ul className={styles.socialLinks}>
      {github && (
        <li>
          <a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiGithub size={24} />
          </a>
        </li>
      )}

      {instagram && (
        <li>
          <a
            href={instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiInstagram size={24} />
          </a>
        </li>
      )}

      {linkedin && (
        <li>
          <a
            href={linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiLinkedin size={24} />
          </a>
        </li>
      )}
    </ul>
  );
}
