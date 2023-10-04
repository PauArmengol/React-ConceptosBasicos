import React from 'react'
import Item from './Item'

// const nombres = ["Paula", "Pedro", "Carlos"]

// COMPONENTE PARA LISTAR COSAS 
const Lista = ( {items, renderItem } ) => {
  return (
    <div>

    {
        items.map((item) => {
            return (
                renderItem(item)
            );
        })
    }

    </div>
  )
}

export default Lista