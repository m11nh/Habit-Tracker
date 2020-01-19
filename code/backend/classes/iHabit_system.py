from classes.user import user
from classes.habit import habit
from classes.admin import admin
from datetime import date
 
class iHabit_system():
	def __init__(self):
		self._user_list = []
		self._admin_list = []
		self._identifiers = {
			"user": 0, 
			"admin": 0, 
			"habit": 0
		}

	@property 
	def user_list(self):
		return self._user_list

	@property
	def admin_list(self):
		return self._admin_list
	
	# main functions for user use
	def add_user(self, username, password, email): 
		# add field validation here
		id = self._identifiers["user"]
		self._identifiers["user"] += 1
		x = user(username, password, email, id)
		self._user_list.append(x)
		return id

	def add_admin(self, username, password):
		# add validation here
		id = self._identifiers["admin"]
		self._identifiers["admin"] += 1
		x = admin(username, password, id)
		self._admin_list.append(x)
		return id
		

	def add_habit(self, user_id, habit_name):
		# add validation here
		id = self._identifiers["habit"]
		self._identifiers["habit"] += 1
		x = habit(habit_name)
		user = self.get_user(user_id)
		user._habit_list.append(x)
		return id
	
	def checkoff_habit(self, user_id, habit_name):
		habit = self.get_habit(user_id, habit_name)
		if habit == -1:
			return -1
		# check if it has already been checked off
		if habit.todays_status == True: 
			return -2
		else:
		 	habit.todays_status = True
		 	habit._days_executed.append(date.today())
	
	def uncheck_habit(self, user_id, habit_name):
		habit = self.get_habit(user_id, habit_name)
		if habit == -1: 
			return -1
		# check if habit is already uncheked
		if habit.todays_status == False:
			return -2
		else: 
			habit.todays_status = False
			habit._days_executed.remove(date.today())

	def current_streak(self, user_id, habit_id):
		return self.get_habit(user_id, habit_id).current_streak()

	def remove_habit(self, user_id, habit_name): 
		habit = self.get_habit(user_id, habit_name)
		user = self.get_user(user_id)
		if habit in user._habit_list:
			user._habit_list.remove(habit)
		else:
			return -1

	def authenticate_user(self, username, password):
		# add field validation here
		for user in self._user_list:
			if user.username == username and user.password == password: 
				return 0
		return -1

	def change_email(self, user_id, new_email):
		user = self.get_user(user_id)
		if (new_email == user.email): 
			return -1
		user.email = new_email
		return 0
		
	def change_password(self, user_id, old_password, new_password):
		user = self.get_user(user_id)
		if user.password != old_password: 
			return -1
		else: 
			user.password = new_password
			return 0

	def user_remove_account(self, user_id, password):
		user = self.get_user(user_id)
		if user in self._user_list:
			self._user_list.remove(user)
		return -1

	def admin_view_list_account(self): 
		return self._user_list

	def admin_remove_account(self, user_id, password):
		admin = self.get_admin(admin_id)
		if admin in self._admin_list:
			self._admin_list.remove(admin)
		else: 
			return -1

	#other functions
	def username_available(self, username): 
		for user in self._user_list: 
			if user.username == username: 
				return -1
		print('found')
		return 0


	#retrieval functions
	def get_user(self, user_id): 
		for user in self._user_list:
			if float(user.id) == float(user_id):
				return user
		return -1

	def get_user_id(self, username): 
		for user in self._user_list:
			if user.username == username: 
				return user.id

	def get_admin(self, admin_id): 
		for admin in self._admin_list:
			#print(id(admin))
			if admin.id == admin_id:
				return admin
		return -1


	def get_habit(self, user_id, habit_name):
		user = self.get_user(user_id)
		if user == -1: 
			return -1
		for habit in user.habit_list: 
			if habit.name == habit_name:
				return habit
		return -1

	def get_habits(self, user_id): 
		user = self.get_user(user_id)
		habit_list = []
		if user == -1: 
			return -1
		else: 
			for habit in user.habit_list: 
				habit_list.append(habit.toJSON())
			return {'habit_list': habit_list}

	# sets the attribute todays_status of a habit to false
	def todays_status_to_false(self, user_id, habit_name):
		habit = self.get_habit(user_id, habit_name)
		if habit == -1:
			return -1
		habit.todays_status = False;













