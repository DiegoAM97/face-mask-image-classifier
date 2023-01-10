import React, { useState } from 'react'

const Project = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const updateImage = (e) => {
        setSelectedImage(e.target.files[0]);
    }


    const predictImage = () => {
        //TODO
    }

    return (
        <section id='Project' className='flex flex-col items-center p-10 bg-project'>
            <div className='max-h-80 w-80'>
                {
                    selectedImage && <img src={URL.createObjectURL(selectedImage)} alt='img-alt' className='my-4'></img>
                }
            </div>
            <input onChange={updateImage} type='file' name='file' accept='.png, .jpg' className='border-4 rounded-lg my-2 p-2'></input>
            <button onClick={predictImage} className='bg-green-400 hover:bg-green-600 my-4 px-6 py-2 rounded-xl text-xl'>Predict image</button>
        </section>
    )
}

export default Project