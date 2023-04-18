#create a function to analyze pairs
def pairEvaluate(thisdict):
    highpair = 0
    pairs = 0
    #iterate through dictionary of card count
    for key in thisdict:
        #if the card count is 2
        if thisdict[key] == 2:
            #add a pair
            pairs = pairs + 1
            #the pair value is equal to the card value (key value)
            pairvalue = key
            # if the value is higher than the current highest value, update the highpair
            if pairvalue > highpair:
                highpair = pairvalue
        #if we have a 3 of a pair, evaluate the high pair
        if thisdict[key] == 3:
            highpair = key  
            
    if pairs == 2:
        pairs = 2
    elif pairs == 1:
        pairs = 1
    else:
        pairs = False
    
    return [pairs, highpair]

#check if there is a flush in the hand
def flushChecker(hand):
    flush = True
    basesuit = hand[0]
    
    for card in hand:
        if card != basesuit:
            flush = False
            return flush
    if flush == True:
        return flush

#check if there is a straight or royal straight in the hands
def straightChecker(hand):
    
    hand.sort()
    
    highcard = hand[-1]
    secondhighcard = hand[-2]
    
    royal = True
    straight = True
    basenumber = (hand[0] - 1)
    rank = hand[0]
    
    if basenumber != 9:
            royal = False
    
    for card in hand:
        basenumber = basenumber + 1
        
        if card != basenumber:
            straight = False
    return [straight, royal, highcard, secondhighcard]

def findsuit(card):
    suitname = ["Hearts","Clubs","Spades","Diamonds"]
    #find the index of the suitname in the card
    
    for suit in suitname:
        #print the first index where the suit is found
        foundindex = card.find(suit)
        
        substring = card[foundindex:len(card)]

        #if we find index where suit starts, return the substring from that index to the end of the string
        if foundindex != -1:
            return substring

#use our functions to evaluate the hand        
def evaluate(hand):
    
    cardnumbers = []
    cardsuits = []
    finalpower = []

    #for each card in hand find out a number value, sort the values
    for card in hand:
        #find the numer by only finding the characters that are digits, convert to int
        number = int("".join(character for character in card if character.isdigit()))
        #append the number of the card into the cardnumbers list
        cardnumbers.append(number)
        #use the findsuit function to append the suit of the card to the cardsuits list
        cardsuits.append(findsuit(card))
        
    #check if flush
    flush = flushChecker(cardsuits)
    
    #check for royal, check for straight
    royalstraight = straightChecker(cardnumbers)
    royal = royalstraight[1]
    straight = royalstraight[0]
    highcard = royalstraight[2]
    secondhighcard = royalstraight[3]

    #count the frequency of each number
    count_nums = dict( (num,cardnumbers.count(num)) for num in set (cardnumbers))
    
    #evaluate pair data
    pairData = pairEvaluate(count_nums)
    pairs = pairData[0]
    highPair = [pairData[1]]
    
   
    if royal and flush and straight: 
        finalpower.append(["Royal Flush", 9])
    elif straight and flush: 
        finalpower.append(["Straigt Flush", 8])
        finalpower.append(["High Card", highcard])
    elif 4 in count_nums.values():
        finalpower.append(["Four of a Kind", 7])
        finalpower.append(["High Card", highcard])
    elif 3 in count_nums.values() and 2 in count_nums.values() :
        finalpower.append(["Full House", 6])
        finalpower.append(["High Card",highcard])
    elif flush:
        finalpower.append(["Flush", 5])
        finalpower.append(["High Card",highcard])
    elif straight:
        finalpower.append(['Straight', 4])
        finalpower.append(["High Card",highcard])
    elif 3 in count_nums.values():
        finalpower.append(["Three of a Kind", 3])
        finalpower.append(["High Pair", highPair[0]])
    elif pairs == 2:
        finalpower.append(["Two Pair", 2])
        finalpower.append(["High Pair", highPair[0]])
    elif pairs == 1:
        finalpower.append(["One Pair", 1])
        finalpower.append(["High Pair" , highPair[0]]) 
    elif pairs == 0:
        finalpower.append(["High Card", 0])
        finalpower.append(["High Card", highcard])
        
    return finalpower


