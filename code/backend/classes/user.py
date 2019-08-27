class user():
	def __init__(self, username, password, email, id): 
		self._username = username
		self._password = password
		self._email = email
		self._habit_list = []
		self._id = id

	@property
	def username(self):
		return self._username

	@property
	def password(self):
		return self._password

	@property
	def id(self):
		return self._id

	@password.setter
	def password(self, new_password):
		self._password = new_password 

	@property
	def email(self):
		return self._email

	@email.setter
	def email(self, new_email):
		self._email = new_email

	@property
	def habit_list(self):
		return self._habit_list

	def __str__(self):
		return "{}, {}, {}".format(self.username, self._password, self._email)







 	
