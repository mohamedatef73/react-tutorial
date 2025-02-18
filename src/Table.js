import React, {Component} from 'react'
 
const TableHeader = props =>{
  let heads = [
    "name","age","job","salary"
  ]

  return (
    <thead>
      <tr>
      {
        heads.map((head,index)=>
            <th key={index}>{head}</th>
        )
      }
      </tr>
    </thead>
  )
}
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
    )
  })

  return <tbody>{rows}</tbody>
}
class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}


export default Table
