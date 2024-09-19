import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import ThemeProvider from "@/contexts/ThemContext";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  return (
    <ThemeProvider>
      <PageContainer>
        <Header />
        <main className={`default-wrapper-width ${styles.main}`}></main>
        <footer className={styles.footer}></footer>
      </PageContainer>
    </ThemeProvider>
  );
}
