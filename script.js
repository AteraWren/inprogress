const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
resultsDropdown
function populateDropdown(results) {
	const dropdown = document.getElementById('resultsDropdown');
	dropdown.innerHTML = '';
	if (results.length === 0) {
		dropdown.style.display = 'none';
		return;
	}
	dropdown.style.display = 'block';
	results.forEach(function(result) {
	const option = document.createElement("option");
	option.textContent = result;
	dropdown.appendChild(option);
		});
	}

	window.onload = function() {
		input.addEventListener('keyup', function() {
			const searchInput = input.value.toLowerCase();
			const results = fruit.filter(f => f.toLowerCase().includes(searchInput));
			populateDropdown(results);
		});
	
		const dropdown = document.getElementById('resultsDropdown');
		dropdown.addEventListener('mouseover', function(event) {
			if (event.target.tagName === 'OPTION') {
				event.target.classList.add('highlighted');
			}
		});
	
		dropdown.addEventListener('mouseout', function(event) {
			if (event.target.tagName === 'OPTION') {
				event.target.classList.remove('highlighted');
			}
		});
	};
	
