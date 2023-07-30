import styles from "@/app/projects/Project.module.scss";
import ProjectList from "./projectList";
export default async function project() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title_box}>
        <div className={styles.title}>Project</div>
      </div>
      <ProjectList />
    </div>
  );
}
