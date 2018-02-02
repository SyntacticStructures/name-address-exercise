// Using namesList and addressesList, accomplish the objective listed in README.md
console.log(
	namesList.map((name) => {
			return Object.assign(name, { 
				"address": addressesList.find(address => address.id === name.id).address
			});
		}
	)
);