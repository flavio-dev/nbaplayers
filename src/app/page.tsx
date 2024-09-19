import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import ThemeProvider from "@/contexts/ThemContext";
import SearchBar from "@/components/SearchBar";
import SearchBarProvider from "@/contexts/SearchBarContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <SearchBarProvider>
        <SearchBar />
        <main className={`default-wrapper-width ${styles.main}`}>
          <div>🏀</div>
          <div>You have no cards to show</div>
        </main>
      </SearchBarProvider>
      <footer className={styles.footer}></footer>
    </ThemeProvider>
  );
}
