from main import Character
import random

class Rogue(Character):
    def __init__(self):
        super().__init__()
        super().__movementpoints == super().__movementpoints * 2
        

rogue1 = Rogue()
rogue1.sethp(200)


print(rogue1.__movementpoints)