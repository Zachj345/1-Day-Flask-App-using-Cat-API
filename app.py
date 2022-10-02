import requests
from flask import Flask
from flask import render_template, request, flash, jsonify, redirect, url_for
import hashlib

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'a81931dfc45081bda33fcc56872ba14e3de672ebdcf0749cbbbdb6fb9243cb2c'

API_KEY = 'live_slwstxVNRlpVUWvVsYjBRMYCCyHR511ixrffrbKmjmLULEYgKNwe9xsGhH4NhqIh'


@app.route('/', methods=['GET', 'POST'])
@app.route('/home', methods=['GET', 'POST'])
def index():

    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=8000, debug=True)
