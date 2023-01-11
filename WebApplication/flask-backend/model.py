from tensorflow import keras
from cv2 import cv2
import numpy as np


SIZE = 100
CHANNEL = 1

model = keras.models.load_model(r'') # include your model path

def make_prediction(img):
    
    img = cv2.imdecode(img, cv2.IMREAD_UNCHANGED)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img = cv2.resize(img, (SIZE, SIZE))

    img_array = np.asarray(img)
    img_array = (img_array.reshape(1,SIZE,SIZE,CHANNEL))/255.0

    probabilitiesPrediction = model.predict(img_array)
    probabilitiesPrediction = np.round(probabilitiesPrediction[0], 3)
    predictionProbability_1 = probabilitiesPrediction[0]
    predictionProbability_2 = probabilitiesPrediction[1]
    predictionProbability_3 = probabilitiesPrediction[2]

    finalPrediction = np.argmax(probabilitiesPrediction)

    return predictionProbability_1, predictionProbability_2, predictionProbability_3, finalPrediction