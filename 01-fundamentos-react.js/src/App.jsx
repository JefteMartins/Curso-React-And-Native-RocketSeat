import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          <Post
            author="Jefte"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post author="Martins" content="Novo texto" />
        </main>
      </div>
    </>
  );
}
