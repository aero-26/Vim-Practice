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

// Click functions for Lessons 2.
function checkForLs2() {
  for (let d = 13; d <= 28; d++) {
    if (check[d].checked) {
      tr[d + 2].classList.add("strike-through");
    } else {
      tr[d + 2].classList.remove("strike-through");
    }
  }
}

for (let e = 15; e <= 30; e++) {
  tr[e].addEventListener("click", function strikeAndCheck() {
    check[e - 2].click();
    checkForLs2();
  });
}

for (let f = 13; f <= 28; f++) {
  check[f].addEventListener("click", () => {
    check[f].click();
    checkForLs2();
  });
}

// Click functions for Lessons 3.
function checkForLs3() {
  for (let g = 29; g <= 34; g++) {
    if (check[g].checked) {
      tr[g + 3].classList.add("strike-through");
    } else {
      tr[g + 3].classList.remove("strike-through");
    }
  }
}

for (let h = 32; h <= 37; h++) {
  tr[h].addEventListener("click", function strikeAndCheck() {
    check[h - 3].click();
    checkForLs2();
  });
}

for (let f = 29; f <= 34; f++) {
  check[f].addEventListener("click", () => {
    check[f].click();
    checkForLs3();
  });
}
