//styles
import styles from "./styles.module.css";
//logo
import logo from "../../assets/github-logo.png";

function Footer() {
  return (
    <>
      <h3 className={styles.h3}>Abdullah Aydın</h3>
      <a href="https://github.com/abdullah-aydin" className={styles.link}>
        <img src={logo} alt="" className={styles.githubIcon} />
      </a>
    </>
  );
}

export default Footer;
