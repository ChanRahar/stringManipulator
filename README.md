# Simple String Manipulation
Simple node app to manipulate the string "(id,created,employee(id,firstname,employeeType(id),lastname),location)" and transform it into the following format:

created
employee

- employeeType

-- id

- firstname

- id

- lastname

id

location


##Some of my Assumptions for transforming the string:
* The first character is always "(" and last character is always ")"
* The words does not change
* There is only one instance of multiple words enclosed in parenthesis

