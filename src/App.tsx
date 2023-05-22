//JSX -> JavaScript + XML
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css'
import style from './App.module.css';


// author recebe {avatar: "", role: ""}
// publisheadAt : Date
// content : String


const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com//hermeson883.png",
      name: "Hermeson do Vale beserra",
      role: "Web Deb && Data Science",
    },

    content: [
      {type : "Paragraph", content: 'Fala galeraa 👋',  },
      
      {type : "Paragraph", content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },

      {type: "link", content: "👉Gabriel_dev/doctorcare"},
      
    ],
    publishedAt: new Date('2023-05-01 17:05:00'),
  },

  {
    id: 2,
    author: {
      avatarURL: "https://github.com//gabrielsoares40940.png",
      name: "Gabriel Soares",
      role: "Web Dev & Python",
    },

    content: [
      {type : "Paragraph", content: 'Fala galeraa 👋',  },
      
      {type : "Paragraph", content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },

      {type: "link", content: "👉Gabriel_dev/doctorcare"},
      
    ],
    publishedAt: new Date('2023-05-01 20:05:00'),
  },

]

//Iterando um array

// Podemos usar o foreach, porém ele não irá retornar nada para mim

// Já o map sempre irá retornar algo para nós

export function App() {
  return (
    <div>

      <Header />

      <div className={style.wrapper}>
        <Sidebar/>
        
       
        <main>
          {
            posts.map((post) => {
              return <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt = {post.publishedAt}
              />
            })
          }
        </main> 
      </div>

    </div>
  )
}
