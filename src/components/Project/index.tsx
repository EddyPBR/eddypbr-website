import SocialLinks from "../SocialLinks";

import styles from "./styles.module.scss";

type ProjectProps = {
  title: string;
  text: string;
  image: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
};

export default function Project({ title, text, image, github, instagram, linkedin, website }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <article className={styles.content}>
        <h1>{title}</h1>
        <p>{text}</p>
        <SocialLinks github={github} instagram={instagram} linkedin={linkedin} website={website} />
      </article>
    </div>
  );
}
