document.addEventListener("DOMContentLoaded", function(event) {
  let loginBtn = document.getElementById("loginForm");
  let uid = document.getElementById("uid");
  let pwd = document.getElementById("pwd");
  let valid = true;

  loginBtn.addEventListener("submit", form_check, true);

  function form_check(event) {
    event.preventDefault();
    if (!uid.value) {
      uid.focus();
      return false;
    }
    if (!pwd.value) {
      pwd.focus();
      return false;
    }
    if (valid) this.submit();
  }
});
