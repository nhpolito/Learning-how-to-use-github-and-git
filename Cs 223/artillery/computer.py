from tank import Tank
import random

class Computer(Tank):
    def __init__(self, name):
        super().__init__(name)
    
    def fire(self):
        angle = random.randrange(5,50,5)
        velocity = random.randrange(5,50,5)
        super().setAngle(angle)
        super().setVelocity(velocity)
        print(f'Computer fires with an angle of {angle} and velocity of {velocity}.')
        return super().calcDistance()
    


