//Utility Logic
const buddies = new AddressBook();

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, emailAddress, physicalAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.physicalAddress = physicalAddress;
}

Contact.prototype.addEmail = function(email) {
  this.emailAddress = email;
};

Contact.prototype.addPhysical = function(address) {
  this.physicalAddress = address;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//UI Logic
function addContactForm(event) {
  event.preventDefault();

  let firstName = document.getElementById("new-first-name").value;
  let lastName = document.getElementById("new-last-name").value;
  let phoneNumber = document.getElementById("new-phone-number").value;
  let emailAddress = document.getElementById("new-email-address").value;
  let physicalAddress = document.getElementById("new-physical-address").value;

  let newContact = new Contact(firstName, lastName, phoneNumber, emailAddress, physicalAddress);
  
  buddies.addContact(newContact);
}

window.addEventListener("load", function() {
  form = document.getElementById("new-contact");
  form.addEventListener("submit", addContactForm);
});