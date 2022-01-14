import React from 'react'
import useFetchGitfs from '../hooks/useFetchGitfs'
import GifGridItem from './GifGridItem';

const GitGrid = ({category}) => {


 const {data:images, loading}= useFetchGitfs(category);


    return (
        <>
        <h3 className ='animate__animated animate__fadeIn'>{category}</h3>
       
        {loading && <p className='animate__animated animate__flash'> Loading</p>}
        <div className='card-grid'>
            
            
                {
                    images.map(img => (
                        <GifGridItem
                         key={img.id}
                         {...img}
                         />
                    ))
                }
            
        </div>
        </>
    )
}

export default GitGrid
