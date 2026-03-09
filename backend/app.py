from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    resume = data["resume"]

    # Dummy AI analysis (replace later with Claude or OpenAI)

    candidate = {
        "name":"John Doe",
        "skills":"Python, Machine Learning",
        "experience":"3 Years",
        "score":"87%"
    }

    return jsonify(candidate)

if __name__ == "__main__":
    app.run(debug=True)