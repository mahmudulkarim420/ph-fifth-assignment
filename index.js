  let hearts = 0;
  let coins = 100;
  let copys = 0;
  let callHistory = [];



// Hearts Count
for (let i = 1; i <= 9; i++) {
  const heartBtn = document.getElementById(`heart-btn-${i}`);
  
  heartBtn.addEventListener("click", () => {
    hearts++;
    document.getElementById("heart-number").innerText = hearts;
  });
}



  // Clear History
document.getElementById("clear-button").addEventListener("click", function(){
  const callCardContainer = document.getElementById("card-container");
  callCardContainer.innerHTML = "";  
});

function handleCall(name, number, cost = 20) {
  if (coins >= cost) {
    
    coins -= cost;
    document.getElementById("coin-number").innerText = coins;

    
    alert(`📞Calling... ${name}`);

    
    const data = {
      name: name,
      number: number,
      date: new Date().toLocaleTimeString()
    };

    callHistory.push(data);

    
    showHistory();
  } else {
    alert("Not enough coins! 😢");
  }
}

// history render function
function showHistory() {
  const callCardContainer = document.getElementById("card-container");
  callCardContainer.innerText = "";
  for (const data of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center bg-gray-50 rounded-lg p-3">
        <div>
          <h1 class="font-bold text-[18px]">${data.name}</h1>
          <p class="text-gray-700 text-lg">${data.number}</p>
        </div>
        <p class=" text-lg">${data.date}</p>
      </div>
    `;
    callCardContainer.appendChild(div);
  }
}


document.getElementById("call-btn-1").addEventListener("click", function(){
  handleCall("National Emergency Number", 999);
});
document.getElementById("call-btn-2").addEventListener("click", function(){
  handleCall("Police Helpline Number", 999);
});
document.getElementById("call-btn-3").addEventListener("click", function(){
  handleCall("Fire Service Number", 999);
});
document.getElementById("call-btn-4").addEventListener("click", function(){
  handleCall("Ambulance Service", 1994999999);
});
document.getElementById("call-btn-5").addEventListener("click", function(){
  handleCall("Women & Child Helpline", 109);
});
document.getElementById("call-btn-6").addEventListener("click", function(){
  handleCall("Anti-Corruption Helpline", 106);
});
document.getElementById("call-btn-7").addEventListener("click", function(){
  handleCall("Electricity Helpline", 16216);
});
document.getElementById("call-btn-8").addEventListener("click", function(){
  handleCall("Brac Helpline", 16445);
});
document.getElementById("call-btn-9").addEventListener("click", function(){
  handleCall("Bangladesh Railway Helpline", 163);
});


// Copy buttons - reusable version
const copyNumbers = [
  "999",        
  "999",        
  "999",        
  "1994-999999",
  "109",        
  "106",        
  "16216",      
  "163" ,        
  "16445"     
];

for (let i = 0; i < copyNumbers.length; i++) {
  const copyBtn = document.getElementById(`copy-btn-${i + 1}`);
  const number = copyNumbers[i];

  copyBtn.addEventListener("click", () => {
    copys++;
    document.getElementById("copy-number").innerText = copys;

    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
}
