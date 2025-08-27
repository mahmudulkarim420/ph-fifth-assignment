  let hearts = 0;
  let coins = 100;
  let copys = 0;

  // Card 1
  const heartBtn1 = document.getElementById("heart-btn-1");
  heartBtn1.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 2
  const heartBtn2 = document.getElementById("heart-btn-2");
  heartBtn2.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 3
  const heartBtn3 = document.getElementById("heart-btn-3");
  heartBtn3.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 4
  const heartBtn4 = document.getElementById("heart-btn-4");
  heartBtn4.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 5
  const heartBtn5 = document.getElementById("heart-btn-5");
  heartBtn5.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 6
  const heartBtn6 = document.getElementById("heart-btn-6");
  heartBtn6.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 7
  const heartBtn7 = document.getElementById("heart-btn-7");
  heartBtn7.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 8
  const heartBtn8 = document.getElementById("heart-btn-8");
  heartBtn8.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

  // Card 9
  const heartBtn9 = document.getElementById("heart-btn-9");
  heartBtn9.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });

// Coin 1
let callBtn1 = document.getElementById("call-btn-1");
callBtn1.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...National Emergency Number!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 2
let callBtn2 = document.getElementById("call-btn-2");
callBtn2.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Police Helpline Number!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 3
let callBtn3 = document.getElementById("call-btn-3");
callBtn3.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Fire Service Number!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 4
let callBtn4 = document.getElementById("call-btn-4");
callBtn4.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Ambulance Service!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 5
let callBtn5 = document.getElementById("call-btn-5");
callBtn5.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Women & Child Helpline!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 6
let callBtn6 = document.getElementById("call-btn-6");
callBtn6.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Anti-Corruption Helpline!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 7
let callBtn7 = document.getElementById("call-btn-7");
callBtn7.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Electricity Helpline!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 8
let callBtn8 = document.getElementById("call-btn-8");
callBtn8.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Brac Helpline!");
    } else {
      alert("Not enough coins! 😢");
    }
});
// Coin 9
let callBtn9 = document.getElementById("call-btn-9");
callBtn9.addEventListener("click", function(){
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-number").innerText = coins;
      alert("📞Calling...Bangladesh Railway Helpline!");
    } else {
      alert("Not enough coins! 😢");
    }
});


// Copy 1
  const copyBtn1 = document.getElementById("copy-btn-1");
  copyBtn1.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "999"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 2
  const copyBtn2 = document.getElementById("copy-btn-2");
  copyBtn2.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "999"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 3
  const copyBtn3 = document.getElementById("copy-btn-3");
  copyBtn3.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "999"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 4
  const copyBtn4 = document.getElementById("copy-btn-4");
  copyBtn4.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "1994-999999"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 5
  const copyBtn5 = document.getElementById("copy-btn-5");
  copyBtn5.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "109"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 6
  const copyBtn6 = document.getElementById("copy-btn-6");
  copyBtn6.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "106"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 7
  const copyBtn7 = document.getElementById("copy-btn-7");
  copyBtn7.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "16216"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 8
  const copyBtn8 = document.getElementById("copy-btn-8");
  copyBtn8.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "16445"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
// Copy 9
  const copyBtn9 = document.getElementById("copy-btn-9");
  copyBtn9.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;
        const number = "163"; 
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
