import { useParams } from "react-router-dom"

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home

export function Test(){
    const {text} = useParams();
    return (
        <div>Test : {text}</div>
    )
}