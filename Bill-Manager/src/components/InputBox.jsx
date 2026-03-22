import './InputBox.css'
export default function InputBox({name, setName,price, setPrice,quantity, setQuantity, handleAdd}){
    return(
        <div className='inputBox'>
            <input type="text"
            className='input'
            placeholder="Write here"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <input type="number" 
            className='input'
            id='priceInput'
            placeholder='Price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />

            <input type="number" 
            className='input'
            id='quantityInput'
            placeholder='Count'
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            />

            <button onClick={handleAdd}
            className='addButton'
            >Add</button>
        </div>
    )
}