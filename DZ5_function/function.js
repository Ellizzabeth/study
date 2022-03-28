let contacts = [{
        name: 'Tom', phoneNumber: '098-76-54-352'
    },
    {
        name: 'Peter', phoneNumber: '098-54-54-652'
    },
    {
        name: 'Ann', phoneNumber: '050-711-21-21'
    }];


function my_sort(unsorted_contacts, reversed)
{
	if (!reversed) return unsorted_contacts.sort(function (contact1, contact2) {
               return contact1.name.localeCompare(contact2.name);
        });
    return unsorted_contacts.sort(function (contact1, contact2) {
           return contact2.name.localeCompare(contact1.name);
    });
}

const c1 = my_sort(contacts.slice(), false);
console.log(c1);
const c2 = my_sort(contacts.slice(), true);
console.log(c2);

