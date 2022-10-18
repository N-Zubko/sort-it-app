import { useCallback, useState, useContext } from 'react';
import { interval } from './interval';
import { Context } from '../components/Context';
import { wasteToSort } from '../components/ItemTypes';

const use1Second = interval(1e3);

export const useTimer = ({
  seconds: initialSeconds = 0,
  running: initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const { startSorting, setStartSorting } = useContext(Context);
  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
    [running]
  );
  const start = () => {
    setRunning(true);
    setStartSorting(true);
  };
  const pause = () => setRunning(false);
  const reset = () => {
    setSeconds(0);
  };
  const stop = () => {
    pause();
    reset();
    setStartSorting(false);
  };

  use1Second(tick);

  return { pause, reset, running, seconds, start, stop };
};
