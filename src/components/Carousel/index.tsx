import { ReactNode } from "react";

import styles from "./styles.module.scss";


export default function Carousel({ children }: { children: ReactNode }) {
  return(
    <div className={styles.carousel}>
      {children}
    </div>
  )
}