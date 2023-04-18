// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop)  {
// Only change code below this line
  for (let i=0; i<contacts.length; i++) {
    let contact = contacts[i]
    //console.log(contact)

    console.log(contact['firstName']==name)
    if (contact['firstName']==name) {
      console.log('object with firstname of ' + name + ' has the property key of' + prop + ' with the value of ' + contact[prop])
      return "yes"; 
    }   
      return "no"
        ;

  } 
 
}  
// Only change code above this line


console.log(lookUpProfile("Akira", "likes"))