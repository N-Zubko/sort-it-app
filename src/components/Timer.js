import { useTimer } from '../utils/useTimer';

const Timer = () => {
  const { seconds, start, stop } = useTimer();

  return (
    <div className="flex flex-row justify-items-center">
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={start}
      >
        start
      </button>
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={stop}
      >
        stop
      </button>
      <p id="counter">{seconds}</p>
    </div>
  );
};

export default Timer;
