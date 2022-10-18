import { useTimer } from '../utils/useTimer';

const Timer = () => {
  const { seconds, start, stop, pause, reset } = useTimer();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={start}
        >
          start
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={reset}
        >
          reset
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={stop}
        >
          stop
        </button>
      </div>
      <p id="counter" className="bg-white pl-4 pr-4 mt-2">
        {seconds}
      </p>
    </div>
  );
};

export default Timer;
