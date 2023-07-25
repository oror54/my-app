"use client";

import Link from "next/link";
import styles from "@/components/Footer.module.scss";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import React from "react";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.foot_gnb}>
          <div className={styles.foot_logo}>
            <Link href={"/"}>
              <Image src={Logo} alt="지현포트폴리오" className={styles.logo} />
            </Link>
          </div>
          <ul className={styles.gnb}>
            <li className={styles.item}>
              <Link
                href={"/"}
                className={pathname === "/" ? styles.active : ""}
              >
                home
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href={"/projects"}
                className={pathname === "/projects" ? styles.active : ""}
              >
                project
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href={"/study"}
                className={pathname === "/study" ? styles.active : ""}
              >
                study
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.txt}>
          © 2023 Hong jihyeon. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
