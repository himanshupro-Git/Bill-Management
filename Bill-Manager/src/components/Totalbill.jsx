import './Totalbill.css';
export default function Totalbill({itemCount, subtotal, tax, total}){
    return(
        <div className='totalBillBox'>
            <h2 className='heading'>Total Bill</h2>

            <p className='totalItems'>Total Items: {itemCount}</p>
            <p className='Subtotal'>Subtotal: ₹{(subtotal || 0).toFixed(2)}</p>
            <p className='tax'>Tax (18%): ₹{(tax || 0).toFixed(2)}</p>
            <div className='line'></div>
            <p className='total'>Total: ₹{(total || 0).toFixed(2)}</p>
        </div>
    );
}