
function Contact(firstname, phone) {
	this.firstname = firstname;
	this.phone = phone;
	this.email = email;
	this address = address;
};


var contacts = [];


var saveContact = () => {
	var firstname = document.querySelector('[name="firstname"]').value;

	var phone = document.querySelector('[name="phone"]').value;

	var email = document.querySelector('[name=email]').value;

	var address = document.querySelector('[name=address').value;
	var newcontact = new Contact(firstname, phone);
	      // saves contact
	contacts.push(newcontact);
	
	console.log('saved!');
	
};


var contactLookup = () => {
	
	document.getElementById("result").innerHTML = "";
	
	var contactLookup = document.querySelector('[name="contact_lookup"]').value;

	for (i = 0; i < contacts.length; i++) {
		
		contact = contacts[i];
		// first name of contact
		firstname = contact.firstname;
		phone = contact.phone;
		 
		if (firstname.includes(contact_lookup)) {
		
		console.log(firstname, " found!") 
		
		var ptag = document.createElement("p");
		var node = document.createTextNode(firstname + ": "+ phone);
		ptag.appendChild(node);
		var element = document.getElementById("result");
		element.appendChild(ptag);
	} else {
		
		console.log("Not found!")
	}
	};
};


