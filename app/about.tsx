import profileImg from "@/public/image/jihyeon.jpg";
import styles from "@/styles/page.module.scss";
import Image from "next/image";
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.wrap}>
        <div className={styles.title}> about me</div>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image src={profileImg} alt="지현프로필이미지" />
          </div>
          <div className={styles.text}>
            <p>
              프론트엔드 개발자를 꿈구는 웹디자이너, 웹 퍼블리셔 홍지현입니다.
            </p>
            <p>
              최적의 사용자 경험을 고려한 트랜디한 디자인으로 상상을 실현해 낼
              수 있도록 항상 최선을 다하고 있습니다.
            </p>
            <p>
              저는 언제나 배움의 자세를 가지고 새로운 것을 배우려는 의지를
              가지고 있습니다. 저에 대해서 궁금하시다면 아래의 메일 주소로
              언제든 연락 주시기 바랍니다.
            </p>
            <b>jihyeon33@gmail.com</b>
          </div>
        </div>
      </div>
    </div>
  );
}
