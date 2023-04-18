import random

class Character:
    def __init__(self):
        self.__hitpoints = 100
        self.__attackdamage = 10
        self.__movementpoints = 5
        self.__name = "base"
        
    def sethp(self, x):
        self.__hitpoints = x 
    
    def isalive(self):
        return self.__hitpoints > 0
    
    def receivedamage(self):
        self.__hitpoints = ( self.__hitpoints - ( random.randint(1,10) * 2) )
        

        