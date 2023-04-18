var Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  }
  this.getLastName = function() {
    return firstAndLast.split(" ")[1]
  }
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0]
  }
  this.setFirstName = function(first) {
    return firstAndLast = first +" " +this.getLastName()
  }
  this.setLastName = function(last) {
    return firstAndLast = this.getFirstName()+" "+last
  }
  this.setFullName = function(newname){
    return firstAndLast = newname
  }
};

var bob = new Person('Bob Ross');
bob.setLastName("Curry")
let final = bob.getFirstName();

console.log(final)
