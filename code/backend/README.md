# running backend

- create virtual environment
- virtualenv -p /usr/local/bin/python3 env
- source env/bin/activate
- pip install -r requirements.txt
- python3 run.py

# to update requirements.txt
- pip freeze > requirements.txt

# backend API

# add_user
method: POST
route: "/add_user/"
body: {
	username: x, 
	password: y,  
	email: z
}

returns: 
200: 

# user services - /user
	# GET
	- (id) => user_info
	- if id not supplied - returns list of users in database

	# POST
	- (username, password, email) => return status
	- create new user account

	# PUT 
	- (id, email and/or password) => return status
	- update email/password

	# DELETE
	- (id, password) => return status
	- removes user by id if password is correct


# admin services - /admin
	# GET
	- (id) => admin_info
	- if id not supplied - returns list of admins in database

	# POST
	- (username, password) => return status
	- create new admin account

	# PUT 
	- (id, email and/or password) => return status
	- update email/password

	# DELETE
	- (id, password) => return status
	- removes admin by id if password is correct

# habit services - /habit
	# GET 
	- (id) => habit_info + streak

	# POST
	- (id) => return status
	- create habit

	# DELETE
	- (id) => return status
	- remove habit

	/habit/
	# PUT
	- (id) => return status
	- checks off or unchecks habit depending on the payload




# auth services
# user login - /auth/user
	# POST
	- (username, password) => return status
	- authorizes username and password for login

# admin login - /auth/admin
	# POST
	- (username, password) => return status
	- authorizes username and password for login

