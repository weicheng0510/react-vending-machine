import React, { useState } from "react";
import { Link } from "react-router-dom";
import candyImg from './candy.png';
import './Candy.css'

const Candy = () => {
  const [candies, setCandies] = useState([]);
  const getCandy = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setCandies(items => [...items, { x, y }]);
  }
  const img = candies.map((candy, i) => (
    <img src={candyImg} alt="candy image" key={i} className="candy-img" style={{ top: `${candy.y}px`, left: `${candy.x}px` }} />
  ));

  return (
    <div className="candy">
      <div className="candy-card">
        <p>You've got: {candies.length} candies...</p>
        <button onClick={getCandy}>More</button>
        <Link to='/'>Go Back</Link>
      </div>
      {img}
    </div>
  )
}

export default Candy;