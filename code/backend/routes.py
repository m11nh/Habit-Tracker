from flask import Flask, jsonify, request
from flask_api import status
from server import app
from classes.iHabit_system import iHabit_system
from client import start_client, pickle_update
from validation.form_validation import validate_signup, validate_login, validate_add_habit

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
	user_id = int(request.args.get('user_id'))
	user = system.get_user(user_id)
	habit_id = request.args.get('habit_id')
	print('hello, ', habit_id)

	if user == -1:
		error = {'error' : 'unauthorized to make this request'}
		return error, status.HTTP_400_BAD_REQUEST
	if habit_id == '': 
		return system.get_habits(user_id), status.HTTP_200_OK
	else: 
		if habit != -1: 
			habit = system.get_habit(user_id, habit_id)
			return habit.toJSON(), status.HTTP_200_OK
		else: 
			return {'error' : 'habit_id provided is not valid'}, status.HTTP_400_BAD_REQUEST


@app.route("/habit", methods = ["POST"])
def add_habit():
	data = request.get_json()
	habit_name = data['habit_name']
	user_id = data['user_id']
	user = system.get_user(user_id)
	if validate_add_habit(habit_name) == 0: 
		if user != -1: 
			system.add_habit(user_id, habit_name)
			pickle_update(system)
			return {}, status.HTTP_200_OK
		else: 
			error = {'error' : 'unauthorized to make this request'}
			return error, status.HTTP_400_BAD_REQUEST
	else: 
		error = {'error' : validate_add_habit(habit_name)}
		return error, status.HTTP_400_BAD_REQUEST

	return 'hey';

@app.route("/habit", methods = ["DELETE"])
def remove_habit():
	user_id = request.args.get('user_id');
	user = system.get_user(user_id)
	habit_name = request.args.get('habit_name');
	habit_id = system.get_habit_id(habit_name)
	system.remove().....# UP TO HERE

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

