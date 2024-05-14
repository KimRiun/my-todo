import "bootstrap/dist/css/bootstrap.min.css";
import withUser from "./components/practice/widthUser";
import UserDisplay from "./components/practice/UserDisplay";

const UserDisplayWithUser = withUser(UserDisplay);

function App() {
  return (
    <div className="App">
      <UserDisplayWithUser userId={1} />
    </div>
  );
}

export default App;
