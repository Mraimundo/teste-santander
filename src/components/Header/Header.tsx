import { Avatar } from "../Avatar/Avatar";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

const user = {
  author: "Mouzinho Raimundo",
  avatarUrl: "https://github.com/Mraimundo.png",
  role: "Frontend Developer",
};

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <Logo />
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <strong>{user.author}</strong>
            <span>{user.role}</span>
          </div>
          <Avatar src={user.avatarUrl} />
        </div>
      </section>
    </header>
  );
}
