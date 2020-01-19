from flask import Flask, jsonify, request
from flask_api import status
from server import app
from classes.iHabit_system import iHabit_system
from client import start_client, pickle_update
from validation.form_validation import validate_signup, validate_login, validate_habit_name, validate_password, validate_email

system = start_client()
 
# USER SERVICES
@app.route("/user", methods = ["GET"])
def get_user():
	user_id = int(request.args.get('user_id'))
	user = system.get_user(user_id)
	if (user != -1):
		return {'username': user.username, 'email': user.email}, status.HTTP_200_OK
  
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
	data = request.get_json()
	action = data['action']
	user_id = data['user_id']

	# change password
	if action == "changePassword": 
		oldPassword = data['oldPassword']
		newPassword = data['newPassword']
		if validate_password(newPassword) == 0:
			result = system.change_password(user_id, oldPassword, newPassword)
			if result == 0: 
				pickle_update(system)
				return {'error' : 'successfully changed password'}, status.HTTP_200_OK
			else: 
				error = {'error' : 'old password is incorrect'}
				return  error, status.HTTP_400_BAD_REQUEST
		
		else:
			error = {'error' : validate_password(newPassword)}
			return error, status.HTTP_400_BAD_REQUEST

	# change email
	elif action == "changeEmail":
		newEmail = data['newEmail']
		if validate_email(newEmail) == 0:
			result = system.change_email(user_id, newEmail)
			if result == 0:
				pickle_update(system)
				return {'error' : 'successfully changed email'}, status.HTTP_200_OK
			else: 
				error = {'error' : 'email must be different to current one'}
				return  error, status.HTTP_400_BAD_REQUEST
		else: 
			error = {'error' : validate_email(newEmail)}
			return error, status.HTTP_400_BAD_REQUEST

	else: 
		return  {}, status.HTTP_400_BAD_REQUEST

@app.route("/user", methods = ["DELETE"])
def remove_user():
	user_id = request.args.get('user_id')
	password = request.args.get('password')
	user = system.get_user(user_id)
	# check password
	if (user.password != password): 
		error = {'error' : 'password is incorrect'}
		return error, status.HTTP_400_BAD_REQUEST

	remove_account = system.user_remove_account(user_id, password)
	return {}, status.HTTP_200_OK

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
	habit_name = request.args.get('habit_name')


	if user == -1:
		error = {'error' : 'unauthorized to make this request'}
		return error, status.HTTP_400_BAD_REQUEST
	if habit_name == '': 
		return system.get_habits(user_id), status.HTTP_200_OK
	else: 
		habit = system.get_habit(user_id, habit_name)
		if habit != -1: 
			return habit.toJSON(), status.HTTP_200_OK
		else: 
			return {'error' : 'habit_name provided is not valid'}, status.HTTP_400_BAD_REQUEST

@app.route("/habit", methods = ["POST"])
def add_habit():
	data = request.get_json()
	habit_name = data['habit_name']
	user_id = data['user_id']
	user = system.get_user(user_id)
	if validate_habit_name(habit_name) == 0: 
		if user != -1: 
			system.add_habit(user_id, habit_name)
			pickle_update(system)
			return {}, status.HTTP_200_OK
		else:  
			error = {'error' : 'unauthorized to make this request'}
			return error, status.HTTP_400_BAD_REQUEST
	else: 
		error = {'error' : validate_habit_name(habit_name)}
		return error, status.HTTP_400_BAD_REQUEST

@app.route("/habit", methods = ["DELETE"])
def remove_habit():
	user_id = request.args.get('user_id')
	user = system.get_user(user_id)
	habit_name = request.args.get('habit_name')
	if validate_habit_name(habit_name) == 0:
		if user != -1:
			if system.get_habit(user_id, habit_name) != -1: 
				system.remove_habit(user_id, habit_name)
				pickle_update(system)
				return {}, status.HTTP_200_OK
			else: 
				error = {'error' : 'habit name does not exist'}
				return error, status.HTTP_400_BAD_REQUEST
		else:
			error = {'error' : 'unauthorized to make this request'}
			return error, status.HTTP_400_BAD_REQUEST
	else: 
		error = {'error' : validate_habit_name(habit_name)}
		return error, status.HTTP_400_BAD_REQUEST

	return {}, status.HTTP_200_OK

@app.route("/habit", methods = ["PUT"]) # payload decides whether check or uncheck
def update_habit_status():
	#actions: checkoff, uncheck , update_todays_status
	data = request.get_json()
	action = data['action']
	user_id = data['user_id']
	habit_name = data['habit_name']
	checkoff = system.checkoff_habit(user_id, habit_name)
	if action == 'check':
		if checkoff == -1:
			return {'error' : 'user_id or habit name is invalid'}, status.HTTP_400_BAD_REQUEST
		elif checkoff == -2: 
			system.uncheck_habit(user_id, habit_name)
			pickle_update(system) 
			habit = system.get_habit(user_id, habit_name)
			print(habit.toJSON())
			return {'habit_status' : 'unchecked'}, status.HTTP_200_OK
		else:
			pickle_update(system)
			return {'habit_status' : 'checked'}, status.HTTP_200_OK
			
	elif action == 'todays_status_to_false':
		change_todays_status = system.uncheck_habit(user_id, habit_name)
		if change_todays_status == -1: 
			return  {'error' : 'user_id or habit name is invalid'}, status.HTTP_400_BAD_REQUEST
		else: 
			pickle_update(system)
			return {'habit_status' : 'todays status now false'}, status.HTTP_200_OK




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

