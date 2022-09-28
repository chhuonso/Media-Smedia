import React, { useState } from 'react';
import axios from 'axios';
import { Image } from "cloudinary-react";
import "./ImageUpload.css"

export const ImageUpload = () => {
    const [imgSelect, setImgSelect] = useState([])
    const [imgData, setImgData] = useState("");
    const [text, setText] = useState(false);
    const uploadImg = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', imgSelect)
        // from my account Cloudinary
        formData.append('upload_preset', 'smedia')

        const postImage = async () => {
            try {
                const res = await axios.post("https://api.cloudinary.com/v1_1/dqyms4nzr/upload", formData);
                console.log(res);
                setImgData(res.data)
                setText(true)
            } catch (error) {
                console.error(error);
            }
        }
        postImage()
        setText(false)
    }
    return (
        <>
            <div className='container'>
                {text ? <h1>Awesome!!</h1> : <>
                    <h1>Upload Your Images</h1>
                    <h1>Down here</h1>
                    <h1 className='size-5'>⬇️</h1>
                </>}

                <div className='img-conatiner mt-3 mb-3 m-auto'>
                    {
                        imgData && <Image className="w-100 rounded uploaded" cloudName="dqyms4nzr"
                            publicId={`https://res.cloudinary.com/dqyms4nzr/image/upload/v1663728008/${imgData.public_id}`} />
                    }
                </div>
                {text ? <h1>Feel free to add more</h1> : null}
                <div className="input-group w-50 m-auto">
                    <input type="file" name="file" id="file" className="form-control" onChange={(e) => setImgSelect(e.target.files[0])} />
                    <button className='btn btn-primary' onClick={uploadImg}>Upload</button>
                </div>
            </div>
        </>
    )
}
