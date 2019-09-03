from flask import Flask, jsonify, request
from flask_api import status
from server import app
from classes.iHabit_system import iHabit_system
from client import start_client, pickle_update
from validation.form_validation import validate_signup, validate_login

system = start_client()
 
# USER SERVICES
@app.route("/user", methods = ["GET"])
def get_user():
	data = request.get_json()
	user_id = data["user_id"]
	user = system.get_user(user_id)
	if (user != -1):
		return user.toJSON()

@app.route("/user", methods = ["POST"])
def add_user():
	data = request.get_json()
	username = data["username"]
	password = data["password"]
	email = data["email"]
	if validate_signup(username, password, email) == 0: 
		if system.username_available(username) == 0: 
			user_id = system.add_user(username, password, email)
			pickle_update(system)
			user = system.get_user(user_id)
			return user.toJSON(), status.HTTP_200_OK
		else: 
			error = {'error' : 'username taken'}
			return error, status.HTTP_400_BAD_REQUEST
	else: 
		error = {'error' : validate_signup(username, password, email)}
		return error, status.HTTP_400_BAD_REQUEST

@app.route("/user", methods = ["PUT"])
def update_user():
	pass

@app.route("/user", methods = ["DELETE"])
def remove_user():
	data = request.get_json()
	return "hey HEEEEEY BUDDY"

# ADMIN SERVICES
@app.route("/admin", methods = ["GET"])
def get_admin():
	pass

@app.route("/admin", methods = ["POST"])
def add_admin():
	pass

@app.route("/admin", methods = ["PUT"])
def update_admin():
	pass

@app.route("/admin", methods = ["DELETE"])
def remove_admin():
	pass

# HABIT SERVICES
@app.route("/habit", methods = ["GET"]) 
def get_habit():
	pass

@app.route("/habit", methods = ["POST"])
def add_habit():
	pass

@app.route("/habit", methods = ["DELETE"])
def remove_habit():
	pass

@app.route("/habit", methods = ["PUT"]) # payload decides whether check or uncheck
def update_habit_status():
	pass

# AUTH SERVICES
@app.route("/auth/user", methods = ["POST"])
def auth_user():
	data = request.get_json()
	username = data["username"]
	password = data["password"]
	if validate_login(username, password) == 0:
		if system.authenticate_user(username, password) == 0: 
			id = {'id' : system.get_user_id(username)}
			return id, status.HTTP_200_OK
		else:
			error = {'error' : 'wrong username or password'}
			return error, status.HTTP_400_BAD_REQUEST
	else: 
		error = {'error' : validate_login(username, password)}
		return error, status.HTTP_400_BAD_REQUEST
	
@app.route("/auth/admin", methods = ["POST"])
def auth_admin():
	pass

