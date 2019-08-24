class admin():
	def __init__(self, username, password):
		self._username = username
		self._password = password

	@property
	def username(self):
		return self._username

	@username.setter
	def username(self, new_username): 
		self._username = new_username

	@property
	def password(self):
		return self._password

	@password.setter
	def password(self, new_password):
		self._password = new_password

	def __str__(self):
		return '{}, {}'.format(self._username, self._password)


