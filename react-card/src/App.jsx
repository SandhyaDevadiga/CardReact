import {Card} from "./components/Card"
import './App.css'

function App() {
 return <div className='App'>
  <Card 
    imgSrc="./imgIndia.jpg" 
    imgAlt="Card Image"
     title="Card-Title"
      description="On this day, we honour the heroic freedom fighters who gave their lives in the fight for our independence. This day in 1947 saw the end of British sovereignty over India."
      buttonText="LearnMore"
      link="CardPage"
 />
 </div>
}

export default App


