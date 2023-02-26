check = document.getElementsByClassName("form-check-input");
tr = document.getElementsByTagName("tr");

// Click functions for Lesson 1.
function checkForLs1() {
  for (let a = 0; a <= 12; a++) {
    if (check[a].checked) {
      tr[a + 1].classList.add("strike-through");
    } else {
      tr[a + 1].classList.remove("strike-through");
    }
  }
}

for (let b = 1; b <= 13; b++) {
  tr[b].addEventListener("click", function strikeAndCheck() {
    check[b - 1].click();
    checkForLs1();
  });
}

for (let c = 0; c <= 12; c++) {
  check[c].addEventListener("click", () => {
    check[c].click();
    checkForLs1();
  });
}
