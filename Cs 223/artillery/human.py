from tank import Tank

class Human(Tank):
    def __init__(self, name):
        super().__init__(name)
    
    def fire(self):
        velocity = int(input(super().getName() + " enter the velocity."))
        angle = int(input(super().getName() + " enter the angle."))
        print("")
        super().setAngle(angle)
        super().setVelocity(velocity)
        print(f'Human fires with a velocity of {velocity} and an angle of {angle}.')
        return super().calcDistance()
    
