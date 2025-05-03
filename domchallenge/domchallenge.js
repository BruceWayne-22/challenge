const amountInput = document.querySelector('input[type="text"]');
const fromSelect = document.querySelector("select[id='from']");
const toSelect = document.querySelector("select[id='to']");
const convertBtn = document.querySelector("button[id='convert']");
const resetBtn = document.querySelector("button[id='reset']");

const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.exchangerate-api.com/v4/latest/";

async function convertCurrency() {
  try {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (fromCurrency === toCurrency) {
      alert("Please select different currencies");
      return;
    }

    const response = await fetch(`${API_URL}${fromCurrency}`);
    const data = await response.json();

    if (!data.rates) {
      throw new Error("Invalid response from API");
    }

    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    let resultDisplay = document.querySelector(".conversion-result");
    if (!resultDisplay) {
      resultDisplay = document.createElement("div");
      resultDisplay.className =
        "conversion-result mt-4 p-4 bg-white rounded shadow";
      document.querySelector("section:last-child").appendChild(resultDisplay);
    }

    resultDisplay.innerHTML = `
            <p class="text-lg font-semibold">
                ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}
            </p>
            <p class="text-sm text-gray-600">
                Exchange rate: 1 ${fromCurrency} = ${rate} ${toCurrency}
            </p>
        `;
  } catch (error) {
    console.error("Error converting currency:", error);
    alert("Error converting currency. Please try again later.");
  }
}

function resetForm() {
  amountInput.value = "";
  fromSelect.selectedIndex = 0;
  toSelect.selectedIndex = 0;

  const resultDisplay = document.querySelector(".conversion-result");
  if (resultDisplay) {
    resultDisplay.remove();
  }
}

convertBtn.addEventListener("click", convertCurrency);
resetBtn.addEventListener("click", resetForm);

amountInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9.]/g, "");

  const parts = e.target.value.split(".");
  if (parts.length > 2) {
    e.target.value = parts[0] + "." + parts.slice(1).join("");
  }
});
