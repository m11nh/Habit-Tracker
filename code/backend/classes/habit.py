class habit(): 
	def __init__(self, name):
		self._name = name;
		self._days_executed = [];
		self._todays_status = False;

	@property
	def name(self):
		return self._name
	
	@property
	def days_executed(self):
		return self._days_executed
	
	@property
	def todays_status(self):
		return self._todays_status

	def current_streak(self):
		pass

	def __str__(self):
		if self._todays_status == True:
			return 'name: {}, status: checked'.format(self._name)
		else:
			return 'name: {}, status: unchecked'.format(self._name)



	