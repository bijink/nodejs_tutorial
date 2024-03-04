const person = {
  name: 'Bijin',
  age: 24,
  place: 'Malappuram',
  display: function () {
    let name = 'Lal'
    let age=this.age
    console.log(this.name);
    console.log(name);
    
    function displayPlace() {
      console.log(name,age);
    }
    displayPlace()
  },
}


person.display();
person.dob = '14-10-1999'
person.displayAge = function() {
  console.log(this.age);
}

for (x in person) {
  console.log(x,":", person[x]);
}

person.displayAge()
