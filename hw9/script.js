let nameValue
let postValue
let telValue
let adrValue
let currentValue = 1
let price = parseInt(document.querySelector(".price").innerText)

function changeForm() {
    document.querySelector('.form.active').classList.remove('active');
    this.closest('.form').classList.add('active');
  }
  
form1.onclick = form2.onclick = changeForm;
form2.onclick = form3.onclick = changeForm;

document.getElementById("minus__btn").addEventListener("click", function() {
  let numberInput = document.getElementById("number__input"); // numberInput -- це кількість замовлених товарів
  currentValue = parseInt(numberInput.value);
  if (currentValue > 1) {
    currentValue = currentValue - 1;
  } else {
    currentValue = 1;
  }
  numberInput.value = currentValue
  updatePrice()
});

document.getElementById("plus__btn").addEventListener("click", function() {
  let numberInput = document.getElementById("number__input");
  currentValue = parseInt(numberInput.value);
  currentValue = currentValue + 1;
  numberInput.value = currentValue
  updatePrice()
});



document.querySelector("#name").oninput = () => {
    nameValue = document.querySelector("#name").value;
    updateInfo();
}

document.querySelector("#post").oninput = () => {
    postValue = document.querySelector("#post").value;
    updateInfo();
}

document.querySelector("#tel").oninput = () => {
    telValue = document.querySelector("#tel").value;
    updateInfo()
}

document.querySelector("#adr").oninput = (event) => {
    adrValue = event.target.value;
    updateInfo()
}

function updateInfo() {
    document.getElementById("name1").innerText = nameValue;
    document.getElementById("post1").innerText = postValue;
    document.getElementById("tel1").innerText = telValue;
    document.getElementById("adr1").innerText = adrValue;
}

function updatePrice() {
    document.getElementById("price1").innerText = price * currentValue
}

