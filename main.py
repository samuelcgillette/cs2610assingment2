from flask import Flask, jsonify
from random import randint

app = Flask(__name__)

@app.route('/run-script', methods=['GET'])
def my_script():
    random_number = randint(1, 100)
    result = jsonify({"status": "success", "data": "Python script executed!", "randomNumber": random_number})
    result.headers.add("Access-Control-Allow-Origin", "*")
    return result

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    app.run(port=5000)