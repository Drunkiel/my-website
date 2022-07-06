import styles from "../styles/Mainpage.module.scss";

export default function Mainpage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Hi!</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
          voluptatem nihil sapiente accusantium illo odio aspernatur tempora
          ipsam voluptates quasi adipisci dolore suscipit voluptatibus ipsa
          dolores, quidem perspiciatis quis!
        </span>
      </div>
    </div>
  );
}
