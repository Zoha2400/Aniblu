import {useState, useEffect} from 'react'
import './App.scss'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'



function App() {

  const [serv, setServ] = useState({});


  useEffect(() => {
    fetch('http://localhost:3001/api')
    .then((res) => res.json())
    .then(data => {
      console.log(data.message)
    });
    }, [])



  return (
      <div>

        <Header/>

        <Content/>

      </div>
  )
}

export default App
