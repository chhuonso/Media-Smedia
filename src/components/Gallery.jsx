import React, { useState, useEffect} from 'react'
import { getImages } from '../api';
import './Gallery.css';
import NavBar from './NavBar';
import './Gallery.css'

const Gallery = (props) => {     //                  ⬇️ images.resources
    const [imageList, setImageList] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const responseJson = await getImages();
            setImageList(responseJson.resources)
            setNextCursor(responseJson.next_cursor);
        }
        fetchData();
    }, [])

    const handleLoadMoreBtn = async () => {
        const resJson = await getImages(nextCursor);
        setImageList((currentImageList) => [
            ...currentImageList, 
            ...resJson.resources,
        ])
        setNextCursor(resJson.next_cursor);
    }
    return (
        <>
            <div className='cont '>
                <NavBar />
                <h1>Gallery</h1>
                <div className='text-center image-grid bg-dark'>
                    {imageList.map((image) => (
                        <img  className="galleryImg" key={image.asset_id} src={image.url} alt={image.public_id}></img>
                    ))}
                </div>
            <div className='footer'>
                {nextCursor && <button className='uploadBtn' onClick={handleLoadMoreBtn}>Load More</button>}
            </div>
            </div>
        </>
    )
}

export default Gallery