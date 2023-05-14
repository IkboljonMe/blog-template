import classes from "./App.module.scss";
import MainPage from "./components/Home/MainPage";
function App() {
  return (
    <div className={classes.app}>
      <MainPage />
    </div>
  );
}

export default App;
