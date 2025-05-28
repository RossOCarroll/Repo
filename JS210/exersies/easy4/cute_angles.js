const DEGREE = '\u00B0';

function dms(num) {
  let degrees = Math.floor(num);
  let minutesFloat = (num - degrees) * 60;
  let minutes = Math.floor(minutesFloat);
  let seconds = Math.round((minutesFloat - minutes) * 60);

  if (minutes === 0) {
    minutes = '00'
  }
  if (seconds == 0) 
[
  seconds = '00'
]
  let result = `${degrees}${DEGREE}${minutes}'${seconds}"`;

  console.log(result);
  return result;
}





console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");