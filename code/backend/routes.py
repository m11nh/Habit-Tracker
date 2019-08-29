from flask import Flask, jsonify, request
from server import app
from classes.iHabit_system import iHabit_system
from client import start_client, pickle_update

system = start_client()
system.add_user('john', 'wick', 'jwick@hotmail.com')
pickle_update(system)
 
# USER SERVICES
@app.route("/user", methods = ["GET"])
def get_user():
	pass

@app.route("/user", methods = ["POST"])
def add_user():
	pass

@app.route("/user", methods = ["PUT"])
def update_user():
	pass

@app.route("/user", methods = ["DELETE"])
def remove_user():
	data = request.get_json()
	print("delete", data)
	return "hey HEEEEEY BUDDY"

# HABIT SERVICES

# AUTH SERVICES