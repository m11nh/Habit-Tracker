from user import user
from habit import habit
from admin import admin
from datetime import date

class iHabit_system():
	def __init__(self):
		self._user_list = []
		self._admin_list = []

	@property 
	def user_list(self):
		return self._user_list

	@property
	def admin_list(self):
		return self._admin_list
	
	def add_user(self, username, password, email): 
		# add field validation here
		x = user(username, password, email)
		self._user_list.append(x)
		#print(id(x))
		return id(x)

	def add_admin(self, username, password):
		# add validation here
		x = admin(username, password)
		self._admin_list.append(x)
		return id(x)

	def add_habit(self, user_id, habit_name):
		# add validation here
		x = habit(habit_name)
		user = self.get_user(user_id)
		user._habit_list.append(x)
		return id(x)
	
	def checkoff_habit(self, user_id, habit_id):
		habit = self.get_habit(user_id, habit_id)
		if habit == -1:
			return -1
		# check if it has already been checked off
		if habit.todays_status == True: 
			return -1
		else:
		 	habit.todays_status = True
		 	habit._days_executed.append(date.today())
	
	def uncheck_habit(self, user_id, habit_id):
		habit = self.get_habit(user_id, habit_id)
		if habit == -1: 
			return -1
		# check if habit is already uncheked
		if habit.todays_status == False:
			return -1
		else: 
			habit.todays_status = False
			habit._days_executed.remove(date.today())

	def current_streak(self, user_id, habit_id):
		return self.get_habit(user_id, habit_id).current_streak()

	def remove_habit(self, user_id, habit_id): 
		habit = self.get_habit(user_id, habit_id)
		user = self.get_user(user_id)
		if habit in user._habit_list:
			user._habit_list.remove(habit)
		else:
			return -1

	def authenticate_user(self, username, password):
		# add field validation here
		for user in self._user_list:
			if user.username == username and user.password == password: 
				return True
		return False

	def change_email(self, user_id, new_email):
		user = self.get_user(user_id)
		# add field validation here
		user.email = new_email
		
	def change_password(self, user_id, new_password):
		user = self.get_user(user_id)
		# add field validation here
		user.password = new_password

	def user_remove_account(self, user_id, password):
		# validation goes here
		user = self.get_user(user_id)
		if user in self._user_list:
			self._user_list.remove(user)
		else: 
			return -1

	def admin_view_list_account(self): 
		return self._user_list

	def admin_remove_account(self, user_id, password):
		admin = self.get_admin(admin_id)
		if admin in self._admin_list:
			self._admin_list.remove(admin)
		else: 
			return -1

	#retrieval functions
	def get_user(self, user_id): 
		for user in self._user_list:
			#print(id(user))
			if id(user) == user_id:
				return user
		return -1

	def get_admin(self, admin_id): 
		for admin in self._admin_list:
			#print(id(admin))
			if id(admin) == admin_id:
				return admin
		return -1


	def get_habit(self, user_id, habit_id):
		user = self.get_user(user_id)
		if user == -1: 
			return -1
		for habit in user.habit_list: 
			if id(habit) == habit_id:
				return habit
		return -1








system = iHabit_system()
user_id = system.add_user('john', 'soai', 'john@gmail.com')
#print(user)

habit_id = system.add_habit(user_id, habit('hot'))
system.checkoff_habit(user_id, habit_id)
print("hey buddy: {}".format(system.get_habit(user_id, habit_id).days_executed))
system.uncheck_habit(user_id, habit_id)
print("hey buddy: {}".format(system.get_habit(user_id, habit_id).days_executed))
print(system.current_streak(user_id, habit_id))

user = system.get_user(user_id)
print(user.habit_list)
system.remove_habit(user_id, habit_id)
print(user.habit_list)

print(user.email)
system.change_email(user_id, 'fuckboi69@hotmail.com')
print(user.email)

print(user.password)
system.change_password(user_id, 'sexynigga33')
print(user.password)

print(system._user_list)
system.user_remove_account(user_id, 'soai')
print(system._user_list)








