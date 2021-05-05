import SocialLinks from "../SocialLinks";

import styles from "./styles.module.scss";

type Project = {
  title: string;
  text: string;
  image: string;
};

export default function Project({ title, text, image }: Project) {
  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <article className={styles.content}>
        <h1>{title}</h1>
        <p>{text}</p>
        <SocialLinks github="https://github.com/EddyPBR/mural-digital" instagram="https://www.instagram.com/rallymotosdist/" />
      </article>
    </div>
  );
}
