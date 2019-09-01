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
	user = system.add_user(username, password, email)
	print(system.get_user(user))
	return 'hey'

@app.route("/user", methods = ["PUT"])
def update_user():
	pass

@app.route("/user", methods = ["DELETE"])
def remove_user():
	data = request.get_json()
	print("delete", data)
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
	pass
	
@app.route("/auth/admin", methods = ["POST"])
def auth_admin():
	pass

