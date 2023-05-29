import React, { useState } from "react";
import TabTitle from "./TabTitle";
import classes from "./styles.module.scss";

interface Props {
  children: React.ReactElement[];
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className={classes.tabTitleContainer}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
