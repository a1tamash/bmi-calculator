const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const height = document.querySelector("#height").value;
	const weight = document.querySelector("#weight").value;
	const results = document.querySelector("#results");

	if (height === "" || height <= 0 || isNaN(height)) {
		results.innerHTML = "Alert!!! Please enter  valid height...";
	} else if (weight === "" || weight <= 0 || isNaN(weight)) {
		results.innerHTML = "Alert!!! Please enter  valid weight...";
	} else {
		const bmi = (weight / ((height * height) / 10000)).toFixed(2);
		if (bmi < 18.6) {
			results.innerHTML = `BMI: ${bmi} <span class="results">Under Weight</span>`;
		} else if (bmi < 24.9) {
			results.innerHTML = `BMI: ${bmi} <span class="results">Normal Range</span>`;
		} else {
			results.innerHTML = `BMI: ${bmi} <span class="results">Over Weight</span>`;
		}
	}
});
