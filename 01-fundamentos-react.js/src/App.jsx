import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

export function App() {

  return (
      <>
        <Header/>
        <Post
        author="Jefte"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Post
        author="Martins"
        content="Novo texto"
        />
      </>
  )
}


