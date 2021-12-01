import './Shape.css'

export default function Shape({ color, type, setColor, setType }) {
  const classes = `shape ${color} ${type}`
  return (
    <>
      <div className={classes}>
        This is a {color} {type}
      </div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="purple">purple</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
    </>
  )
}
