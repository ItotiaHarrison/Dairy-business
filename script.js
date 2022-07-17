months = ["January","February","March",
          "April","May","June", "July",
          "August","September","October",
          "November","December"
          ]


const shed1 = document.getElementById("shed1");
const shed2 = document.getElementById("shed2");
const shed3 = document.getElementById("shed3");
const shed4 = document.getElementById("shed4");
const total  = document.getElementById("total");
const weeklyIncome = document.getElementById("weekly");
const yearlyIncome = document.getElementById("yearly");
const singleMonths = document.getElementById("list")


   singleMonths.innerHTML =`
        <ul>
            <li id="january" class="list">Income for   ${months[0]} is</li>
            <li id="february" class="list">Income for  ${months[1]} is</li>
            <li id="march" class="list">Income for     ${months[2]} is</li>
            <li id="april" class="list">Income for     ${months[3]} is</li>
            <li id="may" class="list">Income for       ${months[4]} is</li>
            <li id="june" class="list">Income for      ${months[5]} is</li>
            <li id="july" class="list">Income for      ${months[6]} is</li>
            <li id="august" class="list">Income for    ${months[7]} is</li>
            <li id="september" class="list">Income for ${months[8]} is</li>
            <li id="october" class="list">Income for   ${months[9]} is</li>
            <li id="november" class="list">Income for  ${months[10]} is</li>
            <li id="december" class="list">Income for  ${months[11]} is</li>
        </ul>
  `
