import './Shape.css'

export default function Shape({
  color,
  type,
  setColor,
  setType,
  setTypeCount,
  name,
  setName,
  setNameList,
}) {
  const classes = `shape ${color} ${type}`
  const handleType = (e) => {
    setType(e.target.value)
    setTypeCount((prevState) => prevState + 1)
  }

  const handleClick = () => {
    // add name to nameList using setNameList
    setNameList((prevState) => [...prevState, name])
    // reset input by setting name to empty string using setName
    setName('')
  }
  return (
    <>
      <div className={classes}>
        This is a {color} {type}
      </div>
      <select value={type} onChange={handleType}>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="purple">purple</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Save</button>
    </>
  )
}
