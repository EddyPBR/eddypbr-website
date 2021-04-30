import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import styles from "./styles.module.scss";

type socialLinksProps = {
  github: boolean;
  instagram: boolean;
  linkedin: boolean;
};

export default function SocialLinks({ github, instagram, linkedin }: socialLinksProps) {
  return (
    <ul className={styles.socialLinks}>
      {github && (
        <li>
          <a
            href="https://github.com/EddyPBR/"
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
            href="https://www.instagram.com/edvaldo_junior_dev/"
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
            href="https://www.linkedin.com/in/edvaldojuniordev/"
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
