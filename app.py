import requests
from flask import Flask
from flask import render_template, request, flash, jsonify, redirect, url_for
import hashlib

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = ''

print(hashlib.sha256('secretye'.encode()).hexdigest())
