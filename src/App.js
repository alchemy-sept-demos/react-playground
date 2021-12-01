import { useState } from 'react'
import './App.css'
import Shape from './components/Shape'
import cow from './cow.png'
import Header from './components/Header/Header'
// class ClassComponent extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default ClassComponent;

function App() {
  const [color, setColor] = useState('red')
  const [type, setType] = useState('square')

  return (
    <div className="App">
      <Header {...{ color, type }} />
      <Shape {...{ color, setColor, type, setType }} />
    </div>
  )
}

export default App
