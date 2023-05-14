import classes from "./App.module.scss";
import HomePage from "./pages/home";
function App() {
  return (
    <div className={classes.app}>
      <HomePage />
    </div>
  );
}

export default App;
