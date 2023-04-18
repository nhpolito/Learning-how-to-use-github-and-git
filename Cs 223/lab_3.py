#take user input for our first factorial
firstfactorial = int(input("What number would you like to make af actorial of?"))

def factorial(number):
    
    #catch case, factorial input must be an integer
    if type(number) != int:
        return "Input must be an integer"
    
    #catch case, all numbers less than 0 have a factorial of 0
    if number < 0:
        return 0
    
    #catch case 2, all numbers 1 or 0 have a factorial of 1
    elif number == 0 or number == 1:
        return 1
    else: 
        inputnumber = number
    #assign 1 to the total variable to start our factorial function
        total = 1
        
        #while our input number is larger than one we will run a while loop 
        #multiply the initial input number by the total (which starts as 1)
        #the product of this multiplication will be our new total
        #the new total will be be multiplied by number-1 in each sequence of the while loop 
        #this pattern will repeat itself until number-1 happens enough times such that, number = 1
        #when number = 1, the while loop will no longer be satisfied, we will exit the loop
        #the total variable of this loop will store the factorial
        while(number > 1):
            total = total * number
            number = number - 1

        #return the value of total to the factorial function
        print("The factorial of {0} is {1}.".format(inputnumber, total))
        factorial.hasbeencalled = True

        if factorial.hasbeencalled:
            secondinput = (input("If you would like find another factorial, type in the number. If not, type 'end'."))

            if secondinput == 'end':
                return
           
            callbackfactorial = int(secondinput)
            factorial(callbackfactorial)
            factorial.hasbeencalled = True

factorial(firstfactorial)

# if factorial.hasbeencalled:
#     callbackfactorial = int(input("If you would like find another factorial, type in the number. If not, type 'end'."))
#     factorial(callbackfactorial)
    
#     factorial.hasbeencalled = True5

# #has the function been called? Case is no
factorial.hasbeencalled = False
# print(factorial.hasbeencalled)


