function getPilihan(user) {
  var pilihan = Math.floor(Math.random() * 3) + 1;
  var comp = "";
  var hasil = "";

  switch (pilihan) {
    case 1:
      comp = "PAPER";
      console.log(comp);

      if (user == "scissor") {
        hasil = "YOU WIN!";
      } else if (user == "rock") {
        hasil = "YOU LOSE!";
      } else {
        hasil = "DRAW";
      }
      console.log(hasil);
      break;

    case 2:
      comp = "SCISSOR";
      console.log(comp);

      if (user == "rock") {
        hasil = "YOU WIN!";
      } else if (user == "paper") {
        hasil = "YOU LOSE!";
      } else {
        hasil = "DRAW";
      }
      console.log(hasil);
      break;

    case 3:
      comp = "ROCK";
      console.log(comp);

      if (user == "paper") {
        hasil = "YOU WIN!";
      } else if (user == "scissor") {
        hasil = "YOU LOSE!";
      } else {
        hasil = "DRAW";
      }
      console.log(hasil);
      break;
  }

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
  document.getElementById("comp").innerHTML = comp;
}
