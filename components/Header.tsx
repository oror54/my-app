"use client";

import Link from "next/link";
import styles from "@/components/Header.module.scss";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className={styles.header}>
      <div className={styles.navi_wrap}>
        <h1>
          <Link href={"/"}>
            <Image src={Logo} alt="지현포트폴리오" className={styles.logo} />
          </Link>
        </h1>
        <ul className={styles.navibar}>
          <li className={styles.navi_item}>
            <Link href={"/"} className={pathname === "/" ? styles.active : ""}>
              home
            </Link>
          </li>
          <li className={styles.navi_item}>
            <Link
              href={"/projects"}
              className={pathname === "/projects" ? styles.active : ""}
            >
              project
            </Link>
          </li>
          <li className={styles.navi_item}>
            <Link
              href={"/study"}
              className={pathname === "/study" ? styles.active : ""}
            >
              study
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
