export function timeToSeconds(tempo: string) {
  const [hours = 0, minutes = 0, seconds = 0] = tempo.split(":");

  const hourToSecond = Number(hours) * 3600;
  const minuteToSecond = Number(minutes) * 60;
  
  return hourToSecond + minuteToSecond + Number(seconds);
}