import styles from "./Logo.module.css";

export function Logo() {
  return (
    <>
      <a href="#" className={styles.logoLink}>
        <div></div>
        <strong>SELIC</strong>
      </a>
    </>
  );
}
