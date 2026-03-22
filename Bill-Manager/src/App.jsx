import './app.css'

import { useState } from 'react'
import InputBox from './components/InputBox'
import ListItem from './components/ListItem';
import Totalbill from './components/Totalbill';
function App() {

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [items, setItems] = useState([]);


const itemCount = items.reduce((sum, item)=>sum + item.quantity,0);
const subtotal = items.reduce((sum, item)=>sum + item.price, 0);
const tax = subtotal+0.18 ;
const total = subtotal + tax;


function handleAdd(){
  if(!name || !price || !quantity) return;

  const newProduct = {
  name: name.trim(),
  price: Number(price),
  quantity: Number(quantity)
};
setItems([...items, newProduct]);

setName("");
setPrice("");
setQuantity("");

}

function handleDelete(indexToDelete){
  const updatedItems = items.filter((_, index)=>index!==indexToDelete);
  setItems(updatedItems)


}
  return (
    <div className='outerMainBox'>

      <div className='mainBox'>
      <h2 className='heading'>List Manager</h2>
      <InputBox
      name = {name}
      setName = {setName}
      price = {price}
      setPrice = {setPrice}
      quantity={quantity}
      setQuantity={setQuantity}
      handleAdd={handleAdd}

      />
      <ListItem
      items = {items}
      handleDelete={handleDelete}
      />
      </div>

      <Totalbill 
      items = {items}
      itemCount = {itemCount}
      subtotal = {subtotal}
      tax = {tax}
      total = {total}
      />
    </div>
  )
}

export default App
