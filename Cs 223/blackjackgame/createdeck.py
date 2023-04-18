suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']

ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']

deck = []

for suit in suits:
    for rank in ranks:
        deck.append(f'{rank} of {suit}')