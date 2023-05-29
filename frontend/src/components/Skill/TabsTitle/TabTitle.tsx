import React, { useCallback } from "react";
import clsx from "clsx";
import classes from "./styles.module.scss";

interface TabTitleProps {
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

const TabTitle: React.FC<TabTitleProps> = (props) => {
  const { title, setSelectedTab, index, selectedTab } = props;
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <div
      className={clsx(classes.tabTitle, [
        selectedTab === index ? classes.isActive : classes.isNotActive,
      ])}
    >
      <div className={classes.skillTitle} onClick={onClick}>
        {title}
      </div>
    </div>
  );
};
export default TabTitle;
