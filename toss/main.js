function toss() {
  const coin = document.getElementById("coin");
  coin.style.animation = "none";
  if (Math.random() <= 0.5) {
    coin.style.animation = "flip-heads 3s forwards";
  } else {
    coin.style.animation = "flip-tails 3s forwards";
  }
}