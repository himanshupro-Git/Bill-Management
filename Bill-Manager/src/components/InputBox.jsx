import './InputBox.css'
export default function InputBox({name, price, setPrice,quantity, setQuantity, handleAdd, handleNameChange, suggestion}){
    return(
        <div className='inputBox'>
            <input type="text"
            className='input'
            placeholder="Write here"
            value={name}
            onChange={(e)=>handleNameChange(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    handleAdd()
                }
            }}
            />

            <input type="number" 
            className='input'
            id='priceInput'
            placeholder='Price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
                        onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    handleAdd()
                }
            }}
            />

            <input type="number" 
            className='input'
            id='quantityInput'
            placeholder='Count'
            
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
                        onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    handleAdd()
                }
            }}
            
            />
            
            <button onClick={handleAdd}
            className='addButton'
            >Add</button>

        </div>
    )
}