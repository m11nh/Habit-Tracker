import pickle
import os.path

def pickle_update(system):
	pickle_out = open("system.pickle", "wb")
	pickle.dump(system, pickle_out)
	pickle_out.close()

def start_client():
	if os.path.isfile("system.pickle") == False or (os.stat("system.pickle").st_size == 0) == True:
		system = iHabit_system()
	else: 
		pickle_in = open("system.pickle", "rb")
		system = pickle.load(pickle_in)
		pickle_in.close()
	return system