function person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;

  this.display = function () {
    console.log("Details:",name,age,place);
  }
}

var bijin = new person('Bijin', 24, 'Malappuram')
var abi = new person('Abijith', 26, 'Trissur')

bijin.display()
abi.display()
