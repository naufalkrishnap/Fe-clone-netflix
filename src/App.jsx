import "./App.css"
import { useState } from "react"

function JudulWebsite(props) {
  return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    </div>
  )
}

function Artikel(props) {
  const title = props.title
  const description = props.description
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <main >
      <JudulWebsite title="VODS" description="ini merupakan deskripsi dari judul" />
      <Artikel title="artikel pertama" description="ini merupakan artikel pertama" />
      <Artikel title="artikel ke dua" description="ini merupakan artikel kedua" />
      <Artikel title="artikel ke 3"  />
    </main >
  )
}

export default App