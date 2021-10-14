import React from 'react'
import DynamicComponent from '../components/DynamicComponent'

const Grid = ({ blok }) => {
  return (
    <div className="grid text-green-500">
      {blok.columns.map((blok) =>
        (<DynamicComponent blok={blok} key={blok._uid}/>)
      )}
    </div>
  )
}
 
export default Grid