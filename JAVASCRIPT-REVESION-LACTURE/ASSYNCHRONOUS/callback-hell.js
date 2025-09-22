// when asynchronous function depend on more asynchronous (like in deeper) it goes

// so if our first async function failed then after that depend async  function will never execute

// and when async function goes deeper code will growing horizontally instead of vertically

// due to that code readability will decrease these are the main problem with call back hell

// example of callback hell

function payment(amount, callback) {
  console.log(`Payment of ₹${amount} initiated.`);
  setTimeout(() => {
    if (amount > 0) {
      console.log(`₹${amount} deducted.`);
      callback(null, amount);
    } else {
      callback("Invalid payment amount.");
    }
  }, 1000);
}

function checkBalance(amount, callback) {
  console.log("Checking balance...");
  setTimeout(() => {
    if (amount <= 2000) {
      console.log("Sufficient balance.");
      callback(null, "Balance verified.");
    } else {
      callback("Insufficient balance.");
    }
  }, 1000);
}

function ifPaymentDone(amount, callback) {
  console.log("Finalizing payment...");
  setTimeout(() => {
    console.log(`Payment of ₹${amount} completed successfully.`);
    callback(null, "Payment done.");
  }, 1000);
}

// Demonstrating callback hell
payment(3000, (err, amount) => {
  if (err) {
    console.error(err);
  } else {
    checkBalance(amount, (err, status) => {
      if (err) {
        console.error(err);
      } else {
        ifPaymentDone(amount, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});

