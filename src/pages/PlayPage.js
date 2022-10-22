import styles from '../styles/pages/Dashboard.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Board from '../components/Board';

const PlayPage = () => {
  const { user } = useOutletContext();

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <DndProvider backend={HTML5Backend}>
        <Helmet>
          <title>Sort_it!</title>
        </Helmet>
        <Board />
      </DndProvider>
    </div>
  );
};

export default PlayPage;
