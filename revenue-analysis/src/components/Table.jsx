import React from 'react'

const Table = (props) => {
    const list = props.list
  return (
    <table>
        <thead>
            <tr>
                <th>NAME</th>
                <th>DATE</th>
                <th>STATE</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
  )
}

export default Table