import json
from datetime import date, timedelta

class activity(object): 
	def __init__(self, name, date): 
		self._name = name
		self._date = date

	def toJson(self): 
		l = []
		for x in self._date: 
			l.append(x.__str__())
		return {'_name' : self._name, '_date' : l }

		#return json.dumps(self._name, default=lambda o: o.__str__(), indent=4)


today = date.today()
print(today);
a1 = activity('league', [today, today])
print(a1.toJson())