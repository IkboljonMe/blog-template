import { Html, useProgress } from "@react-three/drei";

import ProgressBar from "@ramonak/react-progress-bar";
// import classes from "./styles.module.scss";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{ display: "block", width: "90px", textAlign: "center" }}
    >
      <span style={{ width: "90px" }}>
        <ProgressBar completed={progress.toFixed()} />
      </span>
    </Html>
  );
};

export default CanvasLoader;
