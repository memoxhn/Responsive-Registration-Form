const form = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;
  const fullname = document.getElementById("fullname").value;
  const radioButtonsValue = document.querySelector(
    'input[name="groupgender"]:checked'
  ).value;
  const country = document.getElementById("country").value;
  const termsChkBox = document.getElementById("terms");
  const newsChkBox = document.getElementById("news");

  if (!email || !password | !repassword | !fullname | !country) {
    alert("Please fill all the spaces");
    return;
  }
  if (password !== repassword) {
    alert("Password doesn't match");
    return;
  }
  if (!termsChkBox.checked) {
    alert("To get our services, terms and conditions must be accepted");
    return;
  }

  const infoget = {
    email: email,
    fullname: fullname,
    gender: radioButtonsValue,
    country: country,
    wants_newsletter: newsChkBox.checked,
  };

  console.log(infoget);
};
