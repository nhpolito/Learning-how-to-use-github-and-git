import math

class Tank:
    def __init__(self, name):
        self.__name = name
        self.__velocity = 0
        self.__theta = 0
        
    def getName(self):
        return self.__name
        
    def setAngle(self, angle):
        if angle >= 0:
            self.__theta = math.radians(angle)
        else: 
            self.__theta = 0
    
    def setVelocity(self, velocity):
        if velocity >= 0:
            self.__velocity = velocity
        else:
            self.__velocity = 0
        
    def calcDistance(self):
        var1 = self.__velocity * self.__velocity * math.sin(2 * self.__theta) 
        return var1 / 9.8