
interface contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
}

class AddressBook {
    private contacts: contact[] = [];

    searchContactByName(name: string): contact[] {
        // to avoid case if the contact does not exist
        let contactsFound: contact[] = [];
        for (let contact of this.contacts) {
            if (contact.name == name) {
                contactsFound.push(contact);
            }
        }
        if (contactsFound.length == 0) {
            console.log("No contact found");
            return [];
        }
        return contactsFound;
    }

    searchContactByMail(email: string): contact[] {
        let contactsFound: contact[] = [];
        for (let contact of this.contacts) {
            if (contact.email == email) {
                contactsFound.push(contact);
            }
        }
        if (contactsFound.length == 0) {
            console.log("No contact found");
            return [];
        }
        return contactsFound;
    }

    searchContactByPhone(phone: string): contact[] {
        let contactsFound: contact[] = [];
        for (let contact of this.contacts) {
            if (contact.phone == phone) {
                contactsFound.push(contact);
            }
        }
        if (contactsFound.length == 0) {
            console.log("No contact found");
            return [];
        }
        return contactsFound;
    }
    
    addContact(contact: contact): void {
        //try to avoid double contact
        let index = this.contacts.indexOf(contact);
        if (index > -1) {
            console.log("Contact already exists");
            return;
        }
        this.contacts.push(contact);
    }

    removeContact(contact: contact): void {
        let index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    }
    
    //edit contact need to modifi the contact in the array (email, phone and name)
    editContact(contact: contact, email:string|null, phone:string|null, name:string|null): void {
        let index = this.contacts.indexOf(contact);
        if (index > -1) {
            if (email != null) {
                this.contacts[index].email = email;
            }
            if (phone != null) {
                this.contacts[index].phone = phone;
            }
            if (name != null) {
                this.contacts[index].name = name;
            }
        }
    }

    displayContacts(): void {
        for (let contact of this.contacts) {
            console.log(contact);
        }
    }

    // display contacts who contains a specific string in their name or email
    displayContactsByString(str: string): void {
        for (let contact of this.contacts) {
            if (contact.name.includes(str) || contact.email.includes(str)) {
                console.log(contact);
            }
        }
    }

}


let addressBook = new AddressBook();

let contact1: contact = {
    id: 1,
    name: "John",
    email: "johny@killian.com",
    phone: "0958456789"
};

let contact2: contact = {
    id: 2,
    name: "Killian",
    email: "Killian@kiki.fr",
    phone: "0114456789",
};

let contact3: contact = {
    id: 3,
    name: "John",
    email: "Johny@john.com",
    phone: "0123473689"
};

let contact4: contact = {
    id: 4,
    name: "Martin",
    email: "martino@brie.com",
    phone: "0123468789"
};


addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact4);

console.log(addressBook.searchContactByName("John"));

console.log(addressBook.searchContactByMail("martino@brie.com"));

console.log(addressBook.searchContactByPhone("0123468789"));


console.log("Display all contacts");
addressBook.displayContacts();

console.log("Remove contact 3");
addressBook.removeContact(contact3);

console.log("Display all contacts");
addressBook.displayContacts();

console.log("Edit contact 4");
addressBook.editContact(contact4, null, "0123456789", null);