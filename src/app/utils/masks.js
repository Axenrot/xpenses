export function maskDate(date) {
  if (date?.getYear()) {
    return `${String(date?.getDate())?.padStart(2, "0")}/${String(
      date?.getMonth() + 1
    )?.padStart(2, "0")}/${date?.getFullYear()}`;
  }
  return "???";
}

export const onlyNumbers = (text) => {
  if (text) {
    return text.split("").filter((letter) => letter.match(/\d/));
  } else {
    return "";
  }
};

export const maskNumber = (text) => {
  if (!text) {
    return "";
  }

  return onlyNumbers(text).join("");
};

export const maskReal = (str) => {
  var int = maskNumber(str) * 1;
  int = (int / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return int;
};

export const maskRealReverse = (str) => {
  return parseFloat(maskNumber(str)) / 100;
};
