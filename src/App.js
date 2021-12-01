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
  const [name, setName] = useState('')
  const [nameList, setNameList] = useState([])

  return (
    <div className="App">
      <Header {...{ color, type }} />
      <Shape
        {...{
          color,
          setColor,
          type,
          setType,
          colorCount,
          setColorCount,
          typeCount,
          setTypeCount,
          name,
          setName,
          setNameList,
        }}
      />
      {!!colorCount && <p>You have changed color {colorCount} times.</p>}
      {!!typeCount && <p>You have changed type {typeCount} times.</p>}
      {!!nameList.length && (
        <div>
          You have called your shapes:
          {nameList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
