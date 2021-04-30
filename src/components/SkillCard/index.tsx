import styles from "./styles.module.scss";

type SkillCardProps = {
  headerImage: string;
  title: string;
  text: string;
  footerImage?: string;
}

export default function SkillCard({ headerImage, title, text, footerImage }: SkillCardProps) {
  return(
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={headerImage} alt={title} />
      </div>
      <div className={styles.body}>
        <b>{title}</b>
        <p>{text}</p>
      </div>
      {
        footerImage && (
          <div className={styles.footer}>
            <img src={footerImage} alt={title} />
          </div>
        )
      }
    </div>
  );
} 