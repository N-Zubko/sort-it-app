import styles from '../styles/pages/Dashboard.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import WasteItem from '../components/WasteItem';
import Board from '../components/Board';
import Timer from '../components/Timer';

const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Helmet>
          <title>Dashboard - Nhost</title>
        </Helmet>
        <Timer />
        <Board />
      </DndProvider>
    </>
  );
};

export default Dashboard;
