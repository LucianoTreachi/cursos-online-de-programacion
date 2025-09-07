import Container from "@/components/container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <p className={styles.paragraph}>
            Cursos Online <br /> de Programación
          </p>
          <br />
          <span className={styles.span}>
            Desarrollado por <br />
            <a href="https://lucianotreachi.website/" className={styles.link}>
              Luciano Treachi
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
