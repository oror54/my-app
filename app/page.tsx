import Image from "next/image";
import styles from "@/styles/page.module.scss";
import About from "./about";
import Skill from "./skill";
import mainImage from "@/public/main.jpeg";
/* Prop =========================================================== */
type Prop = {};

export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        {/* <div className={styles.video}>
          <video muted autoPlay loop playsInline>
            <source src={require("@/public/mainvideo.mp4")} type="video/mp4" />
          </video>
        </div> */}
        <div className={styles.main_wrap}>
          <Image
            src={mainImage}
            alt="메인이미지"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>
              <b> “ 디자인</b>과 <b>개발</b>에 대한 열정이 가득한
              <b> 웹 퍼블리셔 ”</b>
            </p>
          </div>
          <div className={styles.text}>
            클라이언트와 협업하여 완성도 높은 결과를 제공할 수 있는 서비를 만날
            수 있도록 항상 최선을 다합니다.
          </div>
        </div>
      </div>
      <About />
      <Skill />
    </div>
  );
}
