import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

import './dashboard.css';

function Dashboard({
  userUsername,
  setIsLoggedIn,
}) {
  return (
    <div className="dashboard">
      <Header
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      />
      <div className="dashboard-content">
        <SideBar />
        <main className="dashboard-page" />
      </div>
    </div>
  );
}

export default Dashboard;
