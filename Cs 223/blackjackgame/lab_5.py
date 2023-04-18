import random
import createdeck
import rankings

firstCheck = []
secondCheck = []
thirdCheck = []

#get a usable deck without mutating the original deck
gamedeck = createdeck.deck.copy()

#function if shuffle neededs
def shuffle():
    global gamedeck
    gamedeck = createdeck.deck.copy()

#deal an amount of cards to a number of players
def dealhand(num_players, hand_size):
    playernumber = 0

    #create a list for each player in the game
    players = [[] for player in range(num_players)]

    #while the final player's hand size is less than game hand size
    #deal a single card to each player, and remove that card from the 
    while len(players[num_players-1]) < hand_size:
        for player in players:
            card = random.choice(gamedeck)
            player.append(card)
            gamedeck.remove(card) 

    
    print(players)
    
    #include the power level for each player's hand
    for player in players:
        firstCheck.append(rankings.evaluate(player))

    #include tbe player number
    for hand in firstCheck:
        playernumber = playernumber + 1
        hand.append(f'Player {playernumber}')

    #set a tophand
    tophand = -1 

    #    
    for hand in firstCheck:
        handscore_1 = hand[0][1]
        if handscore_1 >= tophand:
            tophand = handscore_1
    
    for hand in firstCheck:
        if hand[0][1] == tophand:
            secondCheck.append(hand)

    #set highscard for second check
    highcard_1 = -1
    
    for hand in secondCheck:
        handscore_2 = hand[1][1]
        if handscore_2 > highcard_1:
            highcard_1 = handscore_2

    for hand in secondCheck:
        if hand[1][1] == highcard_1:
            thirdCheck.append(hand)

    winningplayer = thirdCheck[0][2]
    winninghand = thirdCheck[0][0][0]
    wincondition = thirdCheck[0][1][0]
    winvalue = thirdCheck[0][1][1]
    
    print(firstCheck)

    print(f'{winningplayer} wins with {winninghand}, they have a {wincondition} of {winvalue}.')
        
        
dealhand(2, 5)


shuffle()


