//Budget Controller

let budgetController = (function() {
	// some code
})();

// UI Controller

let UIController = (function() {
	const DOMstrings = {
		inputType: ".add__type",
		inputDescription: ".add__description",
		inputValue: ".add__value",
		inputBtn: ".add__btn"
	};
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	};
})();

// Global App Controller

const Controller = (function(budgetCtrl, UICtrl) {
	const DOM = UICtrl.getDOMstrings();
	//some cide
	const ctrlAdditem = function() {
		// 1. Get the field data
		let input = UIController.getInput();
		console.log(input);
		// 2. Add the Item to the budget Controller
		// 3.Add the item to the UI
		// 4. calculate the budget
		//5.display the budget on the UI
	};
	document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAdditem);

	document.addEventListener("keypress", function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAdditem();
		}
	});
})(budgetController, UIController);
