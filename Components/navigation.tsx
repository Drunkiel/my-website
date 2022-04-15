import Image from "next/image";
import Link from "next/link";
import { ReactChild } from "react";
import styles from "../styles/Navigation.module.scss";

function Navigation(props: { children: ReactChild }) {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image
          src="/../public/Img.jpg"
          alt="test image"
          width={"100px"}
          height={"100px"}
        />
      </div>

      <div className={styles.navigation}>
        <Link href="#">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Games</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
      {props.children}
    </div>
  );
}

export default Navigation;
