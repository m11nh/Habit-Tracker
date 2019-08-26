from datetime import date, timedelta
class habit(object): 
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

	@todays_status.setter
	def todays_status(self, status):
		self._todays_status = status

	def current_streak(self):
		pass

	def checkoff(self):
		self._todays_status = True

	def uncheck(self):
		self._todays_status = False

	def current_streak(self):
		today = date.today()
		yesterday = today - timedelta(days=1)
		# if habit wasn't checked off today or yesterday, streak is 0
		if (today not in self._days_executed and yesterday not in self._days_executed):
			return 0
		if today in self._days_executed:
			date_counter = today
		else:
			date_counter = yesterday
		streak = 0
		while (date_counter in self._days_executed):
			streak+=1
			date_counter = date_counter - timedelta(days = 1)

		return streak
		#while()


	def __str__(self):
			return "{}, {}".format(self._name, self._todays_status)

#habit1 = habit('flex')
#habit2 = habit('hey')
#print(habit1)
#print(habit2)
#print(habit1)
#print(habit2)

today = date.today()
#print(today)
today = today.replace(day=22)
#print(today)

habit1 = habit('senna')
habit1.current_streak()


		

	