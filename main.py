from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)

@app.route('/run-script', methods=['POST'])
def my_script():
    data = request.get_json()
    print(f"Received data: {data}")
    img_object = Image.open(data['image'])
    gray_scale = img_object.convert('L')
    gray_scale.save("gray_scale_image.png")
    return jsonify({"message": "Script executed successfully", "received_data": "gray_scale_image.png"})

if __name__ == '__main__':
    print("Starting Flask server on http://0.0.0.0:5000")
    app.run(host='0.0.0.0', port=5000)