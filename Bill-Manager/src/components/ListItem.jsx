import './ListItem.css'
export default function ListItem({items, handleDelete}){
    return(
        <div className='listContainer'>
            <h3 className='listHeading'>List Items</h3>
            {items.map((item, index)=>(
                <div className='itemBox' key={index}> 
                <ul className='itemList'>
                    <span>Name: {item.name} || </span>
                    <span>Price: ₹{item.price} </span>
                    <span>Quantity: {item.quantity}</span>

                    <button 
                    className='deleteButton'
                    onClick={()=>{handleDelete(index)}}>Delete</button>
                    
                </ul>
                </div>
            ))}
        </div>
    )
}