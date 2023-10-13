import item from "../Item/item"

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map(item => <Item ket={item.id} {...item}/> )}
    </div>
  )
}

export default ItemList