from validation.validation_tools import email_validator, standard_field_validator

def validate_signup(username, password, email):
	username_errors = standard_field_validator('username', username, 4)
	password_errors = standard_field_validator('password', password, 4)
	email_errors = email_validator(email)

	if username_errors == 0 and password_errors == 0 and email_errors == 0: 
		return 0
	else: 
		if username_errors != 0: 
			return username_errors
		if password_errors != 0: 
			return password_errors
		return email_errors


print(validate_signup('heybuddy', 'mod', '21@839hotmail.SHIAH'))

	
