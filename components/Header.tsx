import Link from "next/link";
import styles from "@/components/Header.module.scss";

export default function Header() {
  return (
    <ul className={styles.navibar}>
      <li className={styles.navi_item}>
        <Link href="/">home</Link>
      </li>
      <li className={styles.navi_item}>
        <Link href="/projects">project</Link>
      </li>
      <li className={styles.navi_item}>
        <Link href="/study">study</Link>
      </li>
    </ul>
  );
}
