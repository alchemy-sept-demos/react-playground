import logo from './logo.svg'
import './App.css'
import Shape from './components/Shape'
import { shapes } from './data'
import cow from './cow.png'
// class ClassComponent extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default ClassComponent;

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Shapes </h1>
      {/* <Shape type="circle" color="red" />
      <Shape type="square" color="blue" />
      <Shape type="square" color="green" /> */}
      {shapes.map((shape) => (
        <Shape key={shape.id} type={shape.type} color={shape.color} />
      ))}
      {/* <img height="100" src={cow} alt="cow" /> */}
      {/* <img height="100" src={`${process.env.PUBLIC_URL}/dog.jpeg`} /> */}
    </div>
  )
}

export default App
