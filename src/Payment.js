import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css"
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setState] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        //do all the fancy stripe stuff
    }

    const handleChange = event => {
        setDisabled(event.empty);
        MediaStreamError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
               {/* {Payment section - delivery address} */}
               <div className='payment_section'>
                   <div className='payment_title'>
                       <h3>Delivery Address</h3>
                   </div>
                   <div className='payment_ address'>
                       <p>{user?.email}</p>
                       <p>NCR Region</p>
                       <p>Noida UP</p>
                   </div>

               </div>
                 {/* {Payment section - Review items} */}

                 <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                 </div>
                   {/* {Payment section - Payment Method} */}
                   <div className='payment_section'>
                       <div className="payment_title">
                           <h3>Payment Method</h3>
                       </div>
                       <div className="payment_details">
                           {/* Stripe magic go */}
                           <form onSubmit={handleSubmit}>
                               <CardElement onChange={handleChange}/>
                           </form>
                       </div>
                   </div>
            </div>
        </div>
    )
}

export default Payment