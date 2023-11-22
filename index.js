function generateCCExp() {
  const currentYear = new Date().getFullYear();
  const year = Math.floor(Math.random() * 3) + currentYear + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  return `${month}-${year}`;
}

function generateRandomCVV(length) {
  const cvv = [];
  for (let i = 0; i < length; i++) {
    cvv.push(Math.floor(Math.random() * 10));
  }
  return cvv.join("");
}

function generateCCNum(bin) {
  const prefill = bin ? [bin[0]] : [4];
  let working;
  if (bin) {
    working = prefill.concat(
      bin.substring(1).split("").map(Number),
      Array.from({ length: 10 - 1 }, () => Math.floor(Math.random() * 9))
    );
  } else {
    working = prefill.concat(
      Array.from({ length: 15 - 1 }, () => Math.floor(Math.random() * 9))
    );
  }

  const checkOffset = (working.length + 1) % 2;
  let checkSum = 0;

  for (let i = 0; i < working.length; i++) {
    let n = parseInt(working[i], 10); // Parse string as an integer
    if ((i + checkOffset) % 2 === 0) {
      n *= 2;
      checkSum += n > 9 ? n - 9 : n;
    } else {
      checkSum += n;
    }
  }

  const temp = working.concat((10 - (checkSum % 10)) % 10);
  return temp.join("");
}
function generateCreditCard(bin) {
  const exp = generateCCExp();
  const cvv = generateRandomCVV(3);
  const number = generateCCNum(bin);
  return {
    number,
    cvv,
    exp,
  };
}

module.exports = generateCreditCard;