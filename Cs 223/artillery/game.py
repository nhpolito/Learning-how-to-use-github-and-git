import random
import math
from tank import Tank
from human import Human
from computer import Computer

class Game: 
    def __init__(self):
        self.__h1 = 0
        self.__c1 = 0 
        self.__range = 5
        self.__distance = random.randrange(10,150,10)
        self.__gameover = False
    
    def initialize_tanks(self):
        self.initialize_tuman_tank()
        print(" ")
        self.initialize_computer_tank()
        print(f'Welcome {self.__h1.getName()} and {self.__c1.getName()} \n')
        print(f'The tanks are {self.__distance} units apart. \n')
        
    def initialize_tuman_tank(self):
        name = input("Human enter your name ")
        self.__h1 = Human(name)
    
    def initialize_computer_tank(self):
        name = "Artifical Tanktelligence"
        self.__c1 = Computer(name)
        
    def check_win(self, firedistance, name):
        difference = self.__distance - firedistance
        shot = "undershot"
        preposition = 'by'

        if difference < 0:
            difference = difference * -1
            shot = "overshot"
        
        if difference < self.__range:
            self.__gameover = True
            shot = 'hit'
            preposition = 'within'
            print(f'The artillery travels a distance of {firedistance:.1f}, the artillery {shot} the target of {self.__distance} {preposition} {difference:.1f}. \n')
            print(f"game is over and the winner is {name}")
        else:
            print(f'The artillery travels a distance of {firedistance:.1f}, the artillery {shot} the target of {self.__distance} {preposition} {difference:.1f}. \n')
        
    def take_human_turn(self):
        self.check_win(self.__h1.fire(), self.__h1.getName())
        
    def take_computer_turn(self):
        self.check_win(self.__c1.fire(), self.__c1.getName())
    
    def play_game(self):
        self.initialize_tanks()
        while self.__gameover == False:
            if self.__gameover == False:
                self.take_human_turn()
            if self.__gameover == False:
                self.take_computer_turn()

game1 = Game()
game1.play_game()
