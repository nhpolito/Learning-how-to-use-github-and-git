#use the split function on input
#this puts the data in to a list
#use input1, input2, and input 3 to destruture the list data into said variables
input1,input2,input3 = input("Enter three scores (separated by comma): ").split(',')

#define our "meancalculator" function
def meancalculator(score1, score2, score3):
    #create a variable totalscore to define the sum of all 3 scores
    totalscore = score1 + score2 + score3
    
    #use a variable mean to store the total score divided by 3 (average)
    mean = totalscore / 3
    
    #use the format method to pull in data for our totalsore and mean variables
    #use index of these key value pairs to insert data into print function
    #use format codes to convert our show our data as floats with 2 decimals
    print("The sum of the three scores is {0:.2f}, the mean of the three scores is {1:.2f}".format(totalscore,mean))
    
meancalculator(float(input1),float(input2),float(input3))