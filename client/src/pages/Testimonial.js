import React, { useEffect, useState } from 'react'
import axios  from 'axios'  

function Testimonial() {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
      axios.get("/reviews")
      .then(res =>{
        console.log(res.data)
        setReviews(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
      
    },[])
   
  return (
    <div className="container mx-auto mt-8">
    <h2 className="text-lime-900 text-3xl font-bold mb-4 text-center">What Are The Clients<br/>Saying About Us</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700 text-lg font-bold mb-2">{review.customer_name}</p>
          <p className="text-gray-700">{review.review}</p>
        </div>
      ))}
    </div>
  </div>
);
  
}

export default Testimonial