import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Link from "next/link";
import mainImage from "@/public/image/main.jpg";
/* Prop =========================================================== */
type Prop = {};
type SkillProp = {
  title: React.ReactNode;
  icon: any;
};
export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <div className={styles.main_tit}>
            Web designer
            <br /> Publisher
          </div>
          <div className={styles.main_txt}>
            <p>웹디자이너, 웹 퍼블리셔 홍지현입니다.</p>
            <p>
              최적의 사용자 경험을 고려한 트랜디한 디자인으로 상상을 실현해 낼
              수 있도록 항상 최선을 다하고 있습니다.
            </p>
            <p>
              저는 언제나 배움의 자세를 가지고 새로운 것을 배우려는 의지를
              가지고 있습니다. 저에 대해서 궁금하시다면 아래의 메일 주소로
              언제든 연락 주시기 바랍니다.
            </p>
          </div>
          <div className={styles.contact}>jihyeon33@gmail.com</div>
        </div>
        <div className={styles.main_img}>
          <Image src={mainImage} alt="jihyeon" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
