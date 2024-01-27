import style from './Clock.module.scss';

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props ) {
  const minute = Math.floor(time / 60);
  const second = time % 60;

  const [minutoTen, minuteUnit] = String(minute).padStart(2, '0');
  const [secondTen, secondUnit] = String(second).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minutoTen}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDiv}>:</span>
      <span className={style.clockNumber}>{secondTen}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  )
}