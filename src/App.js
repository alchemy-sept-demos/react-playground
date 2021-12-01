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
  const [colorCount, setColorCount] = useState(0)
  const [typeCount, setTypeCount] = useState(0)

  return (
    <div className="App">
      <Header {...{ color, type }} />
      <Shape
        {...{ color, setColor, type, setType, colorCount, setColorCount, typeCount, setTypeCount }}
      />
      <p>You have changed color {colorCount} times.</p>
      <p>You have changed type {typeCount} times.</p>
    </div>
  )
}

export default App
