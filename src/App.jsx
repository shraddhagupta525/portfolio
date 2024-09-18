import './App.css'
import Header from './Components/header/Header'
import Footer from './Components/footer/footer'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {

  return (
    <Router>
     <Header/>
     <Home/>


     <Footer/>

     </Router>
  )
}

export default App
