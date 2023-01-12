import numpy as np
from model import make_prediction
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/predict-image', methods=['POST'])
def predict_image():
	try:
		imageToPredict = request.files['image'].read()
		imageToPredict = np.frombuffer(imageToPredict, np.uint8)
		prob_1, prob_2, prob_3, prediction = make_prediction(imageToPredict)
		return jsonify(	{
							"no_mask" : str(prob_1),
							"ok_mask" : str(prob_2),
							"bad_mask" : str(prob_3),
							"prediction" : str(prediction)
						})
	except Exception:
		return 'Bad request', 400


if __name__ == '__main__':
    app.run(debug=True, port=8080)