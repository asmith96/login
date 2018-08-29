function submit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const emailReg =/^([w-.]+@([w-]+.)+[w-]{2,4})?$/
  if (name === '' || email === '') {
    alert("Please fill all fields");
    return false;
  } else if(!(email).match(emailReg)) {
    alert("Invalid Email!");
    return fal se;
  }else{
    return true;
  }
}

function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if(submit()) {
    document.getElementById("form_id").submit();
    alert(" Name: " + " n Email: " + " n Form Id" + document.getElementById("form id").getAttribute("id") + " nn Form Submitted Successfully");
  }
}

function submit_by_tag() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (submit()) {
    var x = document.getElementByTagName("form");
    x[0] = submit();
    alert(" name: " + name + " n Email: " + email + " n Form Class" + document.getElementById("form_class").getAttribute("class") + "nn Form Submitted Successfully...");
  }
}

function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name === "" || email === "") {
    alert("Please fill all fields!!!");
  }else if (!(email).match(email.reg)) {

  }
  
