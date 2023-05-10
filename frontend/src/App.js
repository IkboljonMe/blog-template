import classes from "./App.module.scss";
import MainPage from "./components/GeneralScreens/MainPage/index";
function App() {
  return (
    <div className={classes.app}>
      <MainPage />
    </div>
  );
}

export default App;
