import React, { useState } from 'react'

const Project = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const formData = new FormData();
    formData.append('image', selectedImage);

    let textPrediction;

    if (predictionResult) {
        if (predictionResult.prediction === "0") 
            textPrediction = <div>No face mask used</div>
        else if (predictionResult.prediction === "1")
            textPrediction = <div>Face mask used correctly</div>
        else if (predictionResult.prediction === "2")
            textPrediction = <div>Face mask used incorrectly</div>
    }

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        body: formData
    };

    const removePrediction = () => {
        setPredictionResult(null);
    }

    const removeErrorMessage = () => {
        setErrorMessage('');
    }

    const updateImage = (e) => {
        setSelectedImage(e.target.files[0]);
        removePrediction();
        removeErrorMessage();
    }

    const predictImage = () => {
        fetch('http://localhost:8080/predict-image', requestOptions)
            .then(response => response.json())
            .then(data => setPredictionResult(data))
            .catch(() => setErrorMessage('The browser sent a bad request, please check the input is correct.'))
    }

    return (
        <section id='Project' className='flex flex-col items-center p-10 bg-project'>
            {
                predictionResult && 
                <div className='flex bg-green-300 border-2 border-green-600 rounded-lg text-green-600 sm:text-xl text-sm text-center'>
                    <div className='sm:px-16 px-10 py-2'>
                        {textPrediction}
                    </div>
                    <span className='cursor-pointer pr-2' onClick={removePrediction}>ˣ</span>
                </div>
            }
            {
                errorMessage && 
                <div className='flex bg-red-300 border-2 border-red-600 rounded-lg text-red-600 sm:text-xl text-sm text-center'>
                    <div className='sm:px-16 px-10 py-2'>
                        {errorMessage}
                    </div>
                    <span className='cursor-pointer pr-2' onClick={removeErrorMessage}>ˣ</span>
                </div>
            }
            <div>
                {
                    selectedImage && <img src={URL.createObjectURL(selectedImage)} alt='img-alt' className='my-4 max-h-80 max-w-40'></img>
                }
            </div>
            <input onChange={updateImage} type='file' name='file' accept='.png, .jpg' className='border-4 rounded-lg my-2 p-2'></input>
            <button onClick={predictImage} className='bg-green-400 hover:bg-green-600 my-4 px-6 py-2 rounded-xl text-xl'>Predict image</button>
        </section>
    )
}

export default Project