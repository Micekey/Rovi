from flask import Flask, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

log = logging.getLogger("werkzeug")
log.setLevel(logging.ERROR)


@app.route("/click", methods=["POST"])
def handle_click():
    data = request.get_json()
    activity = data.get("buttonNumber", None)
    if activity is not None:
        print(int(activity))
        return activity
    else:
        return "Invalid request"


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
