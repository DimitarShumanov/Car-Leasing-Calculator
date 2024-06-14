document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const carValueInput = document.getElementById('car-value-input');
  const carValueSlider = document.getElementById('car-value-slider');
  const downPaymentInput = document.getElementById('down-payment-input');
  const downPaymentSlider = document.getElementById('down-payment-slider');
  const carTypeSelect = document.getElementById('car-type');
  const leasePeriodSelect = document.getElementById('lease-period');

  const totalLeasingCostSpan = document.getElementById('total-leasing-cost');
  const downPaymentSpan = document.getElementById('down-payment');
  const monthlyInstallmentSpan = document.getElementById('monthly-installment');
  const interestRateSpan = document.getElementById('interest-rate');

  const carValueError = document.getElementById('car-value-error');
  const downPaymentError = document.getElementById('down-payment-error');

  // Validate inputs and show error messages if needed
  function validateInputs() {
    let isValid = true;

    // Validate car value input
    const carValue = parseFloat(carValueInput.value);
    if (isNaN(carValue) || carValue < 10000 || carValue > 200000) {
      carValueError.textContent = 'Please enter a valid car value between €10,000 and €200,000.';
      isValid = false;
    } else {
      carValueError.textContent = '';
    }

    // Validate down payment input
    const downPaymentPercentage = parseFloat(downPaymentInput.value);
    if (isNaN(downPaymentPercentage) || downPaymentPercentage < 10 || downPaymentPercentage > 50) {
      downPaymentError.textContent = 'Please enter a valid down payment percentage between 10% and 50%.';
      isValid = false;
    } else {
      downPaymentError.textContent = '';
    }

    return isValid;
  }

  // Update the values based on inputs
  function updateValues() {
    if (!validateInputs()) {
      return;
    }

    const carValue = parseFloat(carValueInput.value);
    const downPaymentPercentage = parseFloat(downPaymentInput.value);
    const downPayment = (carValue * downPaymentPercentage) / 100;
    const leasePeriod = parseInt(leasePeriodSelect.value);
    const carType = carTypeSelect.value;
    const interestRate = carType === 'brand-new' ? 2.99 : 3.7;
    const P = carValue - downPayment;
    const r = (interestRate / 100) / 12
    const monthlyInstallment = (P * r * Math.pow(1 + r, leasePeriod)) / (Math.pow(1 + r, l) - 1);
    const totalLeasingCost = downPayment + (monthlyInstallment * leasePeriod);

    downPaymentSpan.textContent = `€${downPayment.toFixed(2)}`;
    totalLeasingCostSpan.textContent = `€${totalLeasingCost.toFixed(2)}`;
    monthlyInstallmentSpan.textContent = `€${monthlyInstallment.toFixed(2)}`;
    interestRateSpan.textContent = `${interestRate.toFixed(2)}%`;
  }

   // Event listeners for inputs and sliders
  carValueInput.addEventListener('input', () => {
    carValueSlider.value = carValueInput.value;
    updateValues();
  });

  carValueSlider.addEventListener('input', () => {
    carValueInput.value = carValueSlider.value;
    updateValues();
  });

  downPaymentInput.addEventListener('input', () => {
    downPaymentSlider.value = downPaymentInput.value;
    updateValues();
  });

  downPaymentSlider.addEventListener('input', () => {
    downPaymentInput.value = downPaymentSlider.value;
    updateValues();
  });

  carTypeSelect.addEventListener('change', updateValues);
  leasePeriodSelect.addEventListener('change', updateValues);

  updateValues();
});