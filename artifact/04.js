function ValidateForm() {
  var validUsername = false;
  var validUserPassword = false;
  var validFirstName = false;
  var validLastName = false;
  var validPhone = false;
  var validEmail = false;

  var validAddress = false;
  var validCity = false;
  var validZipcode = false;

  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;

  var errorMessages = "";

  // All the error messages are going to stay in this variable
  /*********** VALIDATES USERNAME ******** */
  //Required field
  //This syntax is using name-of-form.name-of-field.value
  // You can also use document.getElementById("id-of-field").value

  /*********** VALIDATES FIRSTNAME ******** */
  if (myContact.firstname.value === null ||
    myContact.firstname.value === "" ||
    myContact.firstname.value.length > 20 ||
    !myContact.firstname.value.match(letters))
    errorMessages += "<p>The Firstname must be less than 20 characters and it is required. Only letters and numbers are accepted.</p>";
  else
    validFirstName = true;

  /*********** VALIDATES LASTNAME ******** */
  if (myContact.lastname.value === null ||
    myContact.lastname.value === "" ||
    myContact.lastname.value.length > 50 ||
    !myContact.lastname.value.match(letters))
    errorMessages += "<p>The Fastname must be less than 50 characters and it is required. Only letters and numbers are accepted.</p>";
  else
    validLastName = true;

  /*********** VALIDATES EMAIL ******** */
  if (myContact.email.value === null ||
    myContact.email.value === "")
    errorMessages += "<p>The Email is required.</p>";
  else
    validEmail = true;

  /*********** VALIDATES PHONE NUMBER ******** */
  if (myContact.phone.value === null ||
    myContact.phone.value === "" ||
    myContact.phone.value.length > 15 ||
    !myContact.phone.value.match(numbers))
    errorMessages += "<p>The Phone Number must be less than 15 characters and it is required. Only numbers are accepted.</p>";
  else
    validPhone = true;

  /*********** VALIDATES USERNAME ******** */
  if (myContact.username.value.length > 12 ||
    myContact.username.value === null ||
    myContact.username.value === "")
    errorMessages += "<p>The Username must be less than 12 characters and is required</p>";
  else
    validUsername = true;

  //console.log(validUsername);

  /*********** VALIDATES PASSWORD ******** */
  if (myContact.password.value === null ||
    myContact.password.value === "" ||
    myContact.password.value.length > 7)
    errorMessages += "<p>The Password must be less than 7 characters and it is required</p>";
  else
    validUserPassword = true;

  /*********** VALIDATES ADDRESS ******** */
  if (myContact.address.value === null ||
    myContact.address.value === "")
    errorMessages += "<p>The Address is required</p>";
  else
    validAddress = true;

  /*********** VALIDATES CITY ******** */
  if (myContact.city.value === null ||
    myContact.city.value === "")
    errorMessages += "<p>The City is required</p>";
  else
    validCity = true;

  /*********** VALIDATES ZIPCODE ******** */
  if (myContact.zipcode.value === null ||
    myContact.zipcode.value === "" ||
    !myContact.phone.value.match(numbers))
    errorMessages += "<p>The zipcode is required. Only numbers are accepted.</p>";
  else
    validZipcode = true;

  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Make sure you return all the boolean variables that are checking each field
  return (validUsername &&
    validUserPassword &&
    validFirstName &&
    validLastName &&
    validPhone &&
    validEmail &&
    validAddress &&
    validCity &&
    validZipcode);
}
