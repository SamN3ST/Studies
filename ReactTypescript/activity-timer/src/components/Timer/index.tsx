import React, { useEffect, useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss' 
import { timeToSeconds } from "../../common/useful/time";
import { ITasks } from "../../types/task";

interface Props {
  selected: ITasks | undefined;
  endTask: () => void;
}

export default function Timer( {selected, endTask}: Props ) {

  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

   function regressive(counter: number= 0) {
      setTimeout(() => {
        if (counter > 0) {
          setTime(counter - 1);
          return regressive(counter -1);
        }
        endTask();
      }, 1000)
   }

  return (
    <div className={style.timer}>
        <p className={style.title}>Choose a card and start the timer.</p>
        <div className={style.ClockWrapper}>
            <Clock time={time} />
        </div>
        <Button onClick={() => regressive(time)}>
            Start
        </Button>
    </div>
  )
}