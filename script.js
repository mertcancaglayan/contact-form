const containerElement = document.querySelector(".container")
const formElement = document.getElementById("form");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const textElement = document.getElementById("text-area");
const notificationElement = document.querySelector(".notification")

function sendEmail() {
    const message = `
    Name: ${nameElement.value}<br>
    E-mail: ${emailElement.value}<br>
    Phone: ${phoneElement.value}<br>
    <br>
    <br>
    <br>
    Message: ${textElement.value}<br>
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "merttest3737@gmail.com",
        Password : "527FAAA5830810B5E529C8C4EBF31E967CD3",
        To : 'merttest3737@gmail.com',
        From : 'merttest3737@gmail.com',
        Subject : "Testing",
        Body : message
    }).then(
      formElement.style.display = "none",
      notificationElement.style.display = "flex",
    );
};

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    sendEmail()
})