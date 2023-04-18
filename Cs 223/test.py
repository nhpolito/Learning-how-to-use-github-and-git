def whatisyourage(input):
    try:
        # Convert it into integer
        val = int(input)
        print("Input is an integer number. Number = ", val)
    except ValueError:
        print("Input is not a whole number.")
            
value = input("Please enter your age rounded to the nearest whole number")
whatisyourage(value)
