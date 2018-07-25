var reservations = {
  'Bob': {
    claimed: false
  },
  'Ted': {
    claimed: true
  }
}

var isName = prompt('Please enter the name for your reservation');
let name =  new RegExp(isName, "i");

var claimReservation = function () {  
  if ((reservations[name]) && (reservations[name].claimed) === false) {
    return (alert("Welcome to George and Sons, we have your table ready"))
  } else if ((reservations[name]) && (reservations[name].claimed === true)) {
    return alert("well this is awkward, someone's taken your table")
  } else {
    reservations[name] = {claimed: true}
    return alert(`We have plentry of room, come on in ${name}!`)
  }
}

claimReservation();