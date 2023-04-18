import convertunits
import sys

#prompt user, we are collecting data as inputs for our formulas

#create catch case data for invalid data
correctcases = ['mm', 'in', 'cm']
incorrectcases = [" "]

# slice the user input based on a space, which stores our data in a list
# destructure the 0th index to currentamount variable
# destructure the 1st index to currentunit variable
currentamount, currentunit = input("Enter your current unit and measurement shorthand, seperated by a space. (example: 287 cm)").split(" ")

#store an intial value for our final sentence
initialvalue = currentamount + ' ' + currentunit

#case catches if the current unit input is not a valid unit
#check our correctcases list for an instance of currentunit variable data
currentunitvalid = correctcases.count(currentunit)

if currentunitvalid != 1:
    sys.exit("Invalid input, please try again.")

#we store the intended conversion unit as conversionunit variable through a user input
conversionunit = input("Enter what unit you would like to convert your current measurement to. (example: in, cm, or mm)")

#case catches if the conversion unit is not a valid unit
conversionunitvalid = correctcases.count(conversionunit)

if conversionunitvalid != 1:
    sys.exit("Invalid input, please try again.")
    
if currentunit == conversionunit:
    sys.exit("Cannot convert to same units.")

#change the string value to a float so we are able to use it for mathematics
currentamount = float(currentamount)

if currentunit == "in":
    convertedmeasurement = convertunits.inchestounit(currentamount, conversionunit)

    print('{0} is equal to {1:n} {2}.'.format(initialvalue, convertedmeasurement, conversionunit))
    
if currentunit == "mm":
    convertedmeasurement = convertunits.mmtounit(currentamount, conversionunit)
    
    print('{0} is equal to {1:n} {2}.'.format(initialvalue, convertedmeasurement, conversionunit))
    
if currentunit == "cm":
    convertedmeasurement = convertunits.cmtounit(currentamount, conversionunit)
    
    print('{0} is equal to {1:n} {2}.'.format(initialvalue, convertedmeasurement, conversionunit))    
    
