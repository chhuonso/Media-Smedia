import React from 'react'
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom'
import { getImages } from '../api';
import { useEffect, useState } from 'react';
import { ImageUpload } from './ImageUpload';
import NavBar from './NavBar';
import './Main.css'

const Main = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseJson = await getImages();
            setImageList(responseJson.resources)
        }
        fetchData();
    }, [])


    return (
        <div className='cont'>
            <NavBar />
            <ImageUpload />
            {/* <div className='footer w-50 mt-5'>
                <h3>Your previous upload</h3>
                {ImageUpload && <img src={imageList[0]}/>}
            </div> */}
        </div>
    )
}



export default Main