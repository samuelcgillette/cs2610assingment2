from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/run-script', methods=['POST'])
def my_script():
    data = request.get_json()
    if data['number']:
        result = jsonify({"number": int(data['number']) * 2})
        return result
    else:
        return jsonify({"error": "No number provided"}), 400

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    app.run(port=5000)