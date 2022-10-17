import { useCallback, useState } from 'react';
import { interval } from './interval';

const use1Second = interval(1e3);

export const useTimer = ({
  seconds: initialSeconds = 0,
  running: initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
    [running]
  );
  const start = () => {
    setRunning(true);
    //make the waste array appear
  };
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    //make the waste array disappear
    pause();
    reset();
  };

  use1Second(tick);

  return { pause, reset, running, seconds, start, stop };
};
