import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <nav>
        <Link to="/dashboard/profile">Profile</Link>{" "}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Dashboard;
