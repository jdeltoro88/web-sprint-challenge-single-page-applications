import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';




const PizzaHome = () => {
    return (
        <div className='PizzaHome'>
            <h1>lambda pizza!</h1>
            <Link to= {'/pizza'}></Link>
        </div>
    )
}













export default PizzaHome; 