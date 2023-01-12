import React, { useState } from 'react'

const Project = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setprediction] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        mode: 'cors',
        body: null
    };

    const removeErrorMessage = () => {
        setErrorMessage('');
    }

    const updateImage = (e) => {
        setSelectedImage(e.target.files[0]);
    }

    const predictImage = () => {
        fetch('http://localhost:8080/predict-image', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(() => setErrorMessage('The browser sent a bad request, please check the input is correct.'))
    }

    return (
        <section id='Project' className='flex flex-col items-center p-10 bg-project'>
            {
                errorMessage && 
                <div className='bg-red-300 border-2 border-red-600 rounded-lg text-red-600 sm:text-xl text-sm sm:px-20 px-10'>
                    {errorMessage}<span className='cursor-pointer relative sm:left-[4.5rem] left-[2rem] bottom-[.2rem]' onClick={removeErrorMessage}>ˣ</span>
                </div>
            }
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