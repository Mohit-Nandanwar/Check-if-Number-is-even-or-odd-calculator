function checkNumber() {
  const num = document.getElementById("numberInput").value;
  const cheacker = document.getElementById("result");

  if (num === "") {
    cheacker.textContent = "Please enter a number!";
    cheacker.className = "result";
    return;
  }

  if (num % 2 === 0) {
    cheacker.textContent = num + " is Even ✅";
    cheacker.className = "result even";
  } else {
    cheacker.textContent = num + " is Odd 🔴";
    cheacker.className = "result odd";
  }
}
