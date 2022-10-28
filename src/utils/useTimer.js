import { useCallback, useState, useContext, useEffect } from 'react';
import useSound from 'use-sound';

import { interval } from './interval';
import { Context } from '../components/Context';
import BellSound from '../sounds/bell.wav';

const use1Second = interval(1e3);

export const useTimer = ({ running: initiallyRunning = false } = {}) => {
  const [running, setRunning] = useState(initiallyRunning);
  const { seconds, setSeconds } = useContext(Context);
  const { startSorting, setStartSorting } = useContext(Context);
  const { showModal, setShowModal } = useContext(Context);
  const { count, setCount } = useContext(Context);
  const { showWasteDisplay, setShowWasteDisplay } = useContext(Context);

  const [playStart] = useSound(BellSound);

  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
    [running]
  );

  const start = () => {
    playStart();
    setRunning(true);
    setStartSorting(true);
    setShowWasteDisplay(true);
  };
  const pause = () => setRunning(false);
  const reset = () => {
    setSeconds(0);
  };
  const stop = () => {
    pause();
    reset();
    setCount(0);
    setStartSorting(false);
    setShowWasteDisplay(false);
  };

  use1Second(tick);

  useEffect(() => {
    if (!startSorting) {
      pause();
    }
  }, [startSorting]);

  useEffect(() => {
    if (!showModal) {
      reset();
    }
  }, [showModal]);

  return { pause, reset, running, seconds, start, stop };
};
