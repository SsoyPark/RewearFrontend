export const base64ToBlob = (base64, mimeType) => {
  const byteCharacters = atob(base64.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
};

const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const encodeOrderNum = (num, length = 12) => {
  if (num === 0) {
    return BASE62[0].repeat(length);
  }
  let arr = [];
  const base = BASE62.length;
  while (num) {
    let rem = num % base;
    num = Math.floor(num / base);
    arr.push(BASE62[rem]);
  }
  while (arr.length < length) {
    arr.push(BASE62[0]);
  }
  return arr.reverse().join("");
};

export const decodeOrderNum = (str) => {
  const base = BASE62.length;
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    num = num * base + BASE62.indexOf(str[i]);
  }
  return num;
};

export const formatDateString = (dateString) => {
  // 주어진 날짜 문자열을 Date 객체로 변환
  const date = new Date(dateString);

  // 연도, 월, 일 추출
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
  const day = date.getDate().toString().padStart(2, "0");

  // 원하는 형식으로 문자열 생성
  return `${year}.${month}.${day}`;
};
