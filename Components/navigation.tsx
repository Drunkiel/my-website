import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";

function Navigation() {
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
        <Link href="#">Ala</Link>
        <Link href="#">Ala</Link>
        <Link href="#">Ala</Link>
      </div>
    </div>
  );
}

export default Navigation;
