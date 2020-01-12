from validation.validation_tools import email_validator, standard_field_validator

def validate_signup(username, password, email):
	username_errors = standard_field_validator('username', username, 4, False)
	password_errors = standard_field_validator('password', password, 4, False)
	email_errors = email_validator(email)

	if username_errors == 0 and password_errors == 0 and email_errors == 0: 
		return 0
	else: 
		if username_errors != 0: 
			return username_errors
		if password_errors != 0: 
			return password_errors
		return email_errors

def validate_login(username, password):
	username_errors = standard_field_validator('username', username, 4, False)
	password_errors = standard_field_validator('password', password, 4, False)

	if username_errors == 0 and password_errors == 0: 
		return 0
	else: 
		if username_errors != 0: 
			return username_errors
		if password_errors != 0: 
			return password_errors

def validate_habit_name(habit_name):
	habit_name_errors = standard_field_validator('habit', habit_name, 2, True)
	if habit_name_errors == 0: 
		return 0
	else:
		return habit_name_errors






	
