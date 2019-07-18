document.addEventListener("DOMContentLoaded", function(event) {
  let regiBtn = document.getElementById("inputForm");
  let uid = document.getElementById("uid");
  let rstId = document.getElementById("rstId");
  let pwd = document.getElementById("pwd");
  let rstPw = document.getElementById("rstPw");
  let pwdCheck = document.getElementById("pwdCheck");
  let rstPwCheck = document.getElementById("rstPwCheck");
  let uname = document.getElementById("uname");
  let rstName = document.getElementById("rstName");
  let tel = document.getElementById("tel");
  let rstTel = document.getElementById("rstTel");
  regiBtn.addEventListener("submit", form_check, true);
  uid.addEventListener("keyup", checkId);
  pwd.addEventListener("keyup", checkPw);
  pwdCheck.addEventListener("keyup", confirmPw);
  uname.addEventListener("keyup", checkName);
  tel.addEventListener("keyup", checkTel);
  let valid = true;
  let regNum = /[0-9]/;
  let re = /^[a-zA-Z0-9]{4,12}$/;
  // let regexr = /[*~!@#$%&]/;
  let regPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let regName = /^[a-zA-Z가-힣]{2,20}$/;
  let regTel = /^[0-9]{10,11}$/;

  function form_check(event) {
    event.preventDefault();
    if (!uid.value || rstId.className == "redText") {
      uid.focus();
      return false;
    }
    if (!pwd.value || rstPw.className == "redText") {
      pwd.focus();
      return false;
    }
    if (!pwdCheck.value || rstPwCheck.className == "redText") {
      pwdCheck.focus();
      return false;
    }
    if (!uname.value || rstName.className == "redText") {
      uname.focus();
      return false;
    }
    if (!tel.value || rstTel.className == "redText") {
      tel.focus();
      return false;
    }
    if (
      rstId.className == "blueText" &&
      rstPw.className == "blueText" &&
      rstPwCheck.className == "blueText" &&
      rstName.className == "blueText" &&
      rstTel.className == "blueText"
    ) {
      valid = true;
    } else {
      valid = false;
    }
    if (valid) this.submit();
  }

  function checkId() {
    var uidv = uid.value;
    if (regNum.test(uidv.charAt(0))) {
      rstId.innerHTML = "아이디 첫글자는 숫자일 수 없습니다.";
      rstId.className = "redText";
    } else if (re.test(uidv)) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "php/id_check.php?uid=" + uidv, false);

      xhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );

      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == "4" && xhttp.status == 200) {
          if (xhttp.status == 500 || xhttp.status == 404 || xhttp.status == 403)
            alert(xhttp.status);
          else {
            var txt = xhttp.responseText;
            txt = txt.replace(/\n/g, "");
            txt = txt.replace(/\r/g, "");
            txt = txt.replace(/\s+/, "");
            txt = txt.replace(/\s+$/g, "");

            if (txt == "Y") {
              rstId.innerHTML = "이미 가입된 아이디입니다.";
              rstId.className = "redText";
            } else {
              rstId.innerHTML = "사용할 수 있는 아이디입니다.";
              rstId.className = "blueText";
            }
          }
        }
      };
      xhttp.send();
      return true;

      // valid = true;
    } else if (uidv == "") {
      rstId.innerHTML = "";
    } else {
      rstId.innerHTML = "아이디는 4~12자의 영문 대소문자와 숫자로만 입력";
      rstId.className = "redText";
    }
  }
  function checkPw() {
    console.log("hi");
    var pwdv = pwd.value;

    if (regPw.test(pwdv)) {
      rstPw.innerHTML = "사용할 수 있는 비밀번호 입니다.";
      rstPw.className = "blueText";
    } else if (pwdv == "") {
      rstPw.innerHTML = "";
    } else {
      rstPw.innerHTML =
        "비밀번호는 8자 이상, 숫자/대소문자/특수문자를 모두 포함해 입력";
      rstPw.className = "redText";
    }
  }

  function confirmPw() {
    if (pwd.value != pwdCheck.value) {
      rstPwCheck.innerHTML = "비밀번호가 일치하지 않습니다.";
      rstPwCheck.className = "redText";
    } else if (pwd.value == pwdCheck.value) {
      rstPwCheck.innerHTML = "비밀번호가 일치합니다.";
      rstPwCheck.className = "blueText";
    } else if (pwdCheck.value == "") {
      rstPwCheck.innerHTML = "";
    }
  }

  function checkName() {
    var namev = uname.value;

    if (regName.test(namev)) {
      rstName.innerHTML = "사용할 수 있는 이름입니다.";
      rstName.className = "blueText";
    } else if (namev == "") {
      rstName.innerHTML = "";
    } else {
      rstName.innerHTML = "이름은 2~20자의 한글 또는 영문 대소문자로만 입력";
      rstName.className = "redText";
    }
  }
  function checkTel() {
    var telv = tel.value;

    if (regTel.test(telv)) {
      rstTel.innerHTML = "사용할 수 있는 번호입니다.";
      rstTel.className = "blueText";
    } else if (telv == "") {
      rstTel.innerHTML = "";
    } else {
      rstTel.innerHTML = "휴대폰 번호는 10~11자의 숫자만 입력";
      rstTel.className = "redText";
    }
  }
});
