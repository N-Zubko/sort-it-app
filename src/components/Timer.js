import { useTimer } from '../utils/useTimer';

const Timer = () => {
  const { seconds, start, stop, pause, reset } = useTimer();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {/* TODO: disable Start when startSorting is true. When array is empty counting is to stop and display result on screen */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={start}
        >
          start
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
