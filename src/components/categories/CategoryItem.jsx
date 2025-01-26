import React from 'react'
import { Link } from 'react-router-dom'
export default function CategoryItem({id,name,image,count}) {
    return (
        <Link to={`shop/${id}`} className='flex flex-col items-center my-1  py-1 rounded-lg' key={id}>
            <Link to={`shop/${id}`} className="cat-image block overflow-hidden w-20 h-20 rounded-full bg-white shadow-md" key={id}>
               {image ? ( <img src={image} width='100%' height='100%' alt={name} />) :(<></>) }
                
            </Link>
            <div className="cat-content text-center mt-3">
                <p className='text-sm'>{name}</p>
                <p>{count}</p>
            </div>

        </Link>
    )
}
