import './App.css'
import Quizpage from './component/quiz';
import Arr from "./resources/quizQuestion";


function App() {
 

  return (
  <div className='App'>
   <Quizpage  arr={Arr}/>
  </div>
  )
}

export default App