import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import ThemeProvider from "@/contexts/ThemContext";
import SearchBar from "@/components/SearchBar";
import Results from "@/components/Results";
import SearchBarProvider from "@/contexts/SearchBarContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <SearchBarProvider>
        <SearchBar />
        <main className={`default-wrapper-width ${styles.main}`}>
          <Results />
        </main>
      </SearchBarProvider>
      <footer className={styles.footer}></footer>
    </ThemeProvider>
  );
}
