import random



class Game:
    def __init__(self, count):
        self.count = count
        
    turn = 0
        
class Player:
    def __init__(self, count, name):
        self.count = count
        self.name = name
        
        print(self)
        print(count)
        print(f'name = {name}')
        
    x = 10
    
    def test(self, arg):
        self.arg = arg
        print(arg)
   
        
human = Player(0,"human")

print(human.test(5))
