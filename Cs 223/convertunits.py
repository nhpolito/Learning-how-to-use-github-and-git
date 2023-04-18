#defining our unit conversion formulas
def inchestounit(inputin, conversionunit):
    
    #inches to cm
    cmresult = inputin * 2.54
    #inches to mm
    mmresult = inputin * 25.4
    
    #return data based on our intended conversion unit
    if conversionunit =="cm":
        return cmresult
    if conversionunit == "mm":
        return mmresult 
    
def mmtounit(inputmm, conversionunit ):   
    #mm to cm
    cmresult = inputmm * .1
    #mm to inches
    inresult = inputmm * .0393701
    
    #return data based on our intended conversion unit
    if conversionunit =="in":
        return inresult
    if conversionunit == "cm":
        return cmresult 

def cmtounit(inputcm, conversionunit):
    #cm to inches
    inresult = inputcm * .393701
    
    #cm to mm
    mmresult = inputcm * 10 
    
     #return data based on our intended conversion unit
    if conversionunit =="in":
        return inresult
    if conversionunit == "mm":
        return mmresult 