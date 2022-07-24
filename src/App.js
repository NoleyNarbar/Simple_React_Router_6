import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h2>Users</h2>
    </>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal"
  });
  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
