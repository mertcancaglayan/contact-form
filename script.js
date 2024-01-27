const containerElement = document.querySelector(".container");
const formElement = document.getElementById("form");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const subjectElement = document.getElementById("subject");
const textElement = document.getElementById("text-area");
const notificationElement = document.querySelector(".notification");

function setError(element, message) {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errors");

	errorDisplay.style.visibility = "visible";
	errorDisplay.innerText = message;
}

function removeError(element) {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errors");

	errorDisplay.style.visibility = "hidden";
	errorDisplay.innerText = "Error";
}

function validateInput() {
	const formElements = [nameElement, emailElement, phoneElement, subjectElement, textElement];

	for (const element of formElements) {
		if (element.type === "text" || element.tagName.toLowerCase() === "textarea") {
			if (element.value.trim() === "") {
				setError(element, "Required Area");
				return false;
			} else {
				removeError(element);
			}
		} else if (element.type === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(element.value)) {
				setError(element, "Invalid E-mail");
				return false;
			} else {
				removeError(element);
			}
		} else if (element.type === "number") {
			const phoneRegex = /^\d{10}$/;
			if (!phoneRegex.test(element.value)) {
				setError(element, "Invalid Phone Number");
				return false;
			} else {
				removeError(element);
			}
		}
	}

	return true;
}

function sendEmail() {
	const validation = validateInput();

	if (!validation) {
		return false;
	}

	const message = `
    Name: ${nameElement.value}<br>
    E-mail: ${emailElement.value}<br>
    Phone: ${phoneElement.value}<br>
    <br>
    <br>
    <br>
    ${subjectElement.value}
    <br>
    Message: ${textElement.value}<br>
    `;

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "merttest3737@gmail.com",
		Password: "527FAAA5830810B5E529C8C4EBF31E967CD3",
		To: "merttest3737@gmail.com",
		From: "merttest3737@gmail.com",
		Subject: subjectElement.value,
		Body: message,
	}).then(
		(formElement.style.display = "none"),
		(notificationElement.style.display = "flex"),
		setTimeout(() => {
			notificationElement.style.display = "none";
			location.reload();
		}, 5500),
	);
}

formElement.addEventListener("submit", (e) => {
	e.preventDefault();
	sendEmail();
});
