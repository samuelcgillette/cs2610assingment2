from flask import Flask, request, send_file
from flask_cors import CORS
from PIL import Image
import io 

app = Flask(__name__)
CORS(app)

@app.route('/run-script', methods=['POST'])
def my_script():
    data = request.files.get('image')
    print(f"Received data: {data}")
    img_object = Image.open(data.stream)
    gray_scale = img_object.convert('L')

    img_io = io.BytesIO()
    gray_scale.save(img_io, format='PNG')
    img_io.seek(0)
    return send_file(img_io, mimetype='image/png')

if __name__ == '__main__':
    print("Starting Flask server on http://0.0.0.0:5000")
    app.run(host='0.0.0.0', port=5000)