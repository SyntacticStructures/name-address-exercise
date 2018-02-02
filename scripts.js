// Using namesList and addressesList, accomplish the objective listed in README.md

console.log(
	// map over namesList, returning a new Array
	namesList.map((name) => {
		/* 
		for each name Object in namesList, add 
		an "address" field with the corresponding 
		address from addressList as the value.
		*/
			return Object.assign(name, {
				"address": addressesList.find(
								address => address.id === name.id
							).address
			});
		}
	)
);