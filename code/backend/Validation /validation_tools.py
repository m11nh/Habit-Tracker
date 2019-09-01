import re

def email_validator(email): 
	if re.match('^.+@.+\..+$', email): 
		return 0
	else:
		return 'email is not of valid format'
	#x@y.z

def standard_field_validator(field_name, field_content, min_field_length):
	if len(field_content) == 0: 
		return f'{field_name} cannot be empty'
	if len(field_content) < min_field_length: 
		return f'{field_name} must contain {min_field_length} or more characters'
	if contain_only_space(field_content): 
		return f'{field_name} cannot contain only whitespace'
	if contain_space(field_content):
		return f'{field_name} field_content cannot contain whitespace';
	if contain_special_char(field_content): 
		return f'{field_name} contains special char'
	else:
		return 0

def contain_special_char(string): 
	if re.search('[^0-9|A-Z]', string, re.I): 
		return -1
	else:
		return 0

def contain_only_space(string):
	if re.match('[\s]+', string): 
		return -1
	else:
		return 0

def contain_space(string):
	if re.search('\s', string): 
		return -1
	else: 
		return 0