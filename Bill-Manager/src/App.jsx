// import './app.css'

// import { useState } from 'react'
// import InputBox from './components/InputBox'
// import ListItem from './components/ListItem';
// import Totalbill from './components/Totalbill';
// import products from './data/products.json';
// function App() {

// const [name, setName] = useState("");
// const [price, setPrice] = useState("");
// const [quantity, setQuantity] = useState("");
// const [items, setItems] = useState([]);
// const [suggestion, setSuggestion] = useState([]);


// const itemCount = items.reduce((sum, item)=>sum + item.quantity,0);
// const subtotal = items.reduce((sum, item)=>sum + item.price*item.quantity, 0);
// const tax = subtotal*0.30;
// const total = subtotal + tax;


// function handleAdd(){
//   if(!name || !price || !quantity) return;

//   const newProduct = {
//   name: name.trim(),
//   price: Number(price),
//   quantity: Number(quantity)
// };
// setItems([...items, newProduct]);

// setName("");
// setPrice("");
// setQuantity("");

// }

// function handleDelete(indexToDelete){
//   const updatedItems = items.filter((_, index)=>index!==indexToDelete);
//   setItems(updatedItems)
// }

// function handleNameChange(value){
//     setName(value);

//     if(value ===""){
//       setSuggestion([]);
//       return;
//     }
//     const filtered = products.filter(product =>
//             product.name.toLowerCase().includes(value.toLowerCase())
//         );
//     setSuggestion(filtered);
//   }


//   return (
//     <div className='outerMainBox'>

//       <div className='mainBox'>
//       <h2 className='heading'>List Manager</h2>
//       <InputBox
//       name = {name}
//       setName = {setName}
//       price = {price}
//       setPrice = {setPrice}
//       quantity={quantity}
//       setQuantity={setQuantity}
//       handleAdd={handleAdd}
//       handleNameChange = {handleNameChange}
//       suggestion = {suggestion}

//       />
      
        
//     <div className='suggestion'>
//         {suggestion.map((item, index)=>(
//             <div key = {index}
//             onClick={() => {
//               setName(item.name);
//               setPrice(item.price);
//               setSuggestion([]);
              
//             }}
//             className='suggestionBox'
//             > 
//               {/* <p>suggestion</p> */}
//               {item.name} -  ₹{item.price}
//             </div>
//           ))}
//       </div>


//       <ListItem
//       items = {items}
//       handleDelete={handleDelete}
//       />
//       </div>
      
//       <Totalbill 
//       items = {items}
//       itemCount = {itemCount}
//       subtotal = {subtotal}
//       tax = {tax}
//       total = {total}
//       />
//     </div>
//   )
// }

// export default App
import './app.css';
import { useState } from 'react';
import InputBox from './components/InputBox';
import ListItem from './components/ListItem';
import Totalbill from './components/Totalbill';
import products from './data/products.json';

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Total number of items
  const itemCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Product total before GST
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate GST for each product
  const tax = items.reduce(
    (sum, item) =>
      sum + (item.price * item.quantity * item.gstRate) / 100,
    0
  );

  // Final amount
  const total = subtotal + tax;

  function handleAdd() {
    if (!name || !price || !quantity) return;

    const newProduct = {
      id: selectedProduct?.id || `TEMP-${Date.now()}`,
      name: name.trim(),
      price: Number(price),
      quantity: Number(quantity),
      barcode: selectedProduct?.barcode || "",
      gstRate: selectedProduct?.gstRate || 0,
      stock: selectedProduct?.stock || 0,
      category: selectedProduct?.category || "Other"
    };

    setItems([...items, newProduct]);

    setName("");
    setPrice("");
    setQuantity("");
    setSelectedProduct(null);
    setSuggestion([]);
  }

  function handleDelete(indexToDelete) {
    const updatedItems = items.filter(
      (_, index) => index !== indexToDelete
    );

    setItems(updatedItems);
  }

  function handleNameChange(value) {
    setName(value);

    // Clear selected product if user changes the name manually
    setSelectedProduct(null);

    if (value === "") {
      setSuggestion([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestion(filtered);
  }

  return (
    <div className="outerMainBox">

      <div className="mainBox">

        <h2 className="heading">List Manager</h2>

        <InputBox
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAdd={handleAdd}
          handleNameChange={handleNameChange}
          suggestion={suggestion}
        />

        <div className="suggestion">
          {suggestion.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setName(item.name);
                setPrice(item.price);
                setSelectedProduct(item);
                setSuggestion([]);
              }}
              className="suggestionBox"
            >
              {item.name} - ₹{item.price}
            </div>
          ))}
        </div>

        <ListItem
          items={items}
          handleDelete={handleDelete}
        />

      </div>

      <Totalbill
        items={items}
        itemCount={itemCount}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />

    </div>
  );
}

export default App;
