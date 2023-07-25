"use client";

import styles from "@/styles/page.module.scss";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
/* 스킬 이미지 =========================================================== */
import potoshop from "@/public/image/photoshop.svg";
import illustrator from "@/public/image/illustrator.svg";
import dreamweaver from "@/public/image/dreamweaver.svg";
import premier from "@/public/image/premiere.svg";
import figma from "@/public/image/figma.svg";
import html from "@/public/image/html5.svg";
import css from "@/public/image/css3.svg";
import jQuery from "@/public/image/jquery.svg";
import javaScript from "@/public/image/js.svg";
import bootstrap from "@/public/image/bootsrap.svg";
import react from "@/public/image/react.svg";
import next from "@/public/image/next.svg";
import typeScript from "@/public/image/ts.svg";
import git from "@/public/image/github.svg";

/* Prop =========================================================== */
type SkillProp = {
  title: React.ReactNode;
  icon: any;
};
export default function Skill() {
  useEffect(() => {
    AOS.init({ delay: 400, duration: 1200 });
  }, []);
  const skillArray: SkillProp[] = [
    { title: <p>phtoshop</p>, icon: potoshop },
    { title: <p>illustrator</p>, icon: illustrator },
    { title: <p>dreamweaver</p>, icon: dreamweaver },
    { title: <p>PremierPro</p>, icon: premier },
    { title: <p>figma</p>, icon: figma },
    { title: <p>html</p>, icon: html },
    { title: <p>css</p>, icon: css },
    { title: <p>jQuery</p>, icon: jQuery },
    { title: <p>javaScript</p>, icon: javaScript },
    { title: <p>bootstrap</p>, icon: bootstrap },
    { title: <p>react</p>, icon: react },
    { title: <p>next</p>, icon: next },
    { title: <p>typeScript</p>, icon: typeScript },
    { title: <p>git</p>, icon: git },
  ];
  const renderSkillArray = (item: SkillProp, index: number) => {
    return (
      <div className={styles.skl} key={index} data-aos="fade-up">
        <div className={styles.skl_con}>
          <Image src={item.icon} alt="skill" />
          <div className={styles.skl_txt}>{item.title}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.skill}>
      <div className={styles.wrap}>
        <div className={styles.box}>
          <div className={styles.title}>Skill</div>
          <div className={styles.skl_box}>
            {skillArray.map(renderSkillArray)}
          </div>
        </div>
      </div>
    </div>
  );
}
