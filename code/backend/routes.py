from flask import Flask
from server import app
from classes.iHabit_system import iHabit_system
from client import start_client, pickle_update

system = start_client()
system.add_user('john', 'wick', 'jwick@hotmail.com')
pickle_update(system)

#debugging
for user in system.user_list:
	print(user.id)

print(system.get_user(9))

@app.route("/", methods = ["GET"])
def home():
	return "HELLO DADDY" 

@app.route("/users", methods = ["GET"])
def users():
	return jsonify(system.user_list)



