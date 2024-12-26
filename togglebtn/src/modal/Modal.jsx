import React, { useState } from 'react'
import "./style.css"
import { ImCross } from "react-icons/im";
const Modal = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="container" onClick={() => setShow(false)}>
                <h1>Modal</h1>
                <button type='button' onClick={(e) =>{ 
                    e.stopPropagation();
                    setShow(true);
                    }}>click heare</button>
                {/* <div>
                  {
                        show && (<div className='modal-box'>
                            <h1>modal heading <span className="cros"  onClick={() => setShow(false)}><ImCross /></span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga accusantium similique id, sapiente quis architecto illo eaque cupiditate tempore nostrum libero dicta voluptatum asperiores assumenda est numquam omnis officia.</p>
                        </div>)
                    }
                  </div> */}
                <div className={show ? 'modal-container':""}>
                    {
                        show && (<div className='modal-box'>
                            <h1>modal heading <span className="cros" onClick={() => setShow(false)}><ImCross /></span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga accusantium similique id, sapiente quis architecto illo eaque cupiditate tempore nostrum libero dicta voluptatum asperiores assumenda est numquam omnis officia.</p>
                        </div>) 
                    }
                </div>
            </div>

        </>
    )
}

export default Modal