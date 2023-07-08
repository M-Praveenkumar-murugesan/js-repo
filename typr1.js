const form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
e.preventDefault();
const fname = document.getElementById("name").value;
const Iname = document.getElementById("dob").value;
localStorage.setItem("firstName", fname);
localStorage.setItem("lastName", Iname);
document.getElementById("storedFirstName").textContent =fname; document.getElementById('storedLastName').textContent = lname;
});
window.onload = function () {
const storedFirstName = localStorage.getItem("firstName"); const storedLastName = localStorage.getItem("lastName");
if (storedFirstName && storedLastName) {
document.getElementById('storedFistName').textContent = storedFirstName;
document.getElementById('storedLastName').textContent = storedLastName;
}
};