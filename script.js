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
    checkForLs3();
  });
}

for (let i = 29; i <= 34; i++) {
  check[i].addEventListener("click", () => {
    check[i].click();
    checkForLs3();
  });
}

// Click functions for Lessons 4.
function checkForLs4() {
  for (let j = 35; j <= 47; j++) {
    if (check[j].checked) {
      tr[j + 4].classList.add("strike-through");
    } else {
      tr[j + 4].classList.remove("strike-through");
    }
  }
}

for (let k = 39; k <= 51; k++) {
  tr[k].addEventListener("click", function strikeAndCheck() {
    check[k - 4].click();
    checkForLs4();
  });
}

for (let l = 35; l <= 47; l++) {
  check[l].addEventListener("click", () => {
    check[l].click();
    checkForLs4();
  });
}

// Click functions for Lessons 5.
function checkForLs5() {
  for (let m = 48; m <= 53; m++) {
    if (check[m].checked) {
      tr[m + 5].classList.add("strike-through");
    } else {
      tr[m + 5].classList.remove("strike-through");
    }
  }
}

for (let n = 53; n <= 58; n++) {
  tr[n].addEventListener("click", function strikeAndCheck() {
    check[n - 5].click();
    checkForLs5();
  });
}

for (let o = 48; o <= 53; o++) {
  check[o].addEventListener("click", () => {
    check[o].click();
    checkForLs5();
  });
}

// Click functions for Lessons 6.
function checkForLs6() {
  for (let p = 54; p <= 63; p++) {
    if (check[p].checked) {
      tr[p + 6].classList.add("strike-through");
    } else {
      tr[p + 6].classList.remove("strike-through");
    }
  }
}

for (let q = 60; q <= 69; q++) {
  tr[q].addEventListener("click", function strikeAndCheck() {
    check[q - 6].click();
    checkForLs6();
  });
}

for (let r = 54; r <= 63; r++) {
  check[r].addEventListener("click", () => {
    check[r].click();
    checkForLs6();
  });
}

// Click functions for Macro Functions.
function checkForMF() {
  for (let s = 64; s <= 68; s++) {
    if (check[s].checked) {
      tr[s + 7].classList.add("strike-through");
    } else {
      tr[s + 7].classList.remove("strike-through");
    }
  }
}

for (let t = 71; t <= 75; t++) {
  tr[t].addEventListener("click", function strikeAndCheck() {
    check[t - 7].click();
    checkForMF();
  });
}

for (let u = 64; u <= 68; u++) {
  check[u].addEventListener("click", () => {
    check[u].click();
    checkForMF();
  });
}

// Click functions for Some important settings and shortcuts.
function checkForImpSS() {
  for (let v = 69; v <= 79; v++) {
    if (check[v].checked) {
      tr[v + 8].classList.add("strike-through");
    } else {
      tr[v + 8].classList.remove("strike-through");
    }
  }
}

for (let w = 77; w <= 87; w++) {
  tr[w].addEventListener("click", function strikeAndCheck() {
    check[w - 8].click();
    checkForImpSS();
  });
}

for (let x = 69; x <= 79; x++) {
  check[x].addEventListener("click", () => {
    check[x].click();
    checkForImpSS();
  });
}

// Click functions for Understanding Registry for copy and pasting stuffs.
function checkForRegCp() {
  for (let y = 80; y <= 82; y++) {
    if (check[y].checked) {
      tr[y + 9].classList.add("strike-through");
    } else {
      tr[y + 9].classList.remove("strike-through");
    }
  }
}

for (let z = 89; z <= 91; z++) {
  tr[z].addEventListener("click", function strikeAndCheck() {
    check[z - 9].click();
    checkForRegCp();
  });
}

for (let ab = 80; ab <= 82; ab++) {
  check[ab].addEventListener("click", () => {
    check[ab].click();
    checkForRegCp();
  });
}

// Click functions for Use of i or in.
function checkFori() {
  for (let ac = 83; ac <= 85; ac++) {
    if (check[ac].checked) {
      tr[ac + 10].classList.add("strike-through");
    } else {
      tr[ac + 10].classList.remove("strike-through");
    }
  }
}

for (let ad = 93; ad <= 95; ad++) {
  tr[ad].addEventListener("click", function strikeAndCheck() {
    check[ad - 10].click();
    checkFori();
  });
}

for (let ae = 83; ae <= 85; ae++) {
  check[ae].addEventListener("click", () => {
    check[ae].click();
    checkFori();
  });
}
