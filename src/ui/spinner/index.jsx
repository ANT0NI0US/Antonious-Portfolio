import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className="flexCenter h-[100vh] min-h-full bg-transparent backdrop-blur-sm">
      <div className={`${styles.loader}`}></div>
    </div>
  );
}
