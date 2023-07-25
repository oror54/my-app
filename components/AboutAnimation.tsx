import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "@/public/line.json";
import styles from "@/styles/page.module.scss";

export default function AboutAnimation() {
  return (
    <Lottie loop animationData={lottieJson} play className={styles.aboutline} />
  );
}
