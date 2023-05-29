import React, {FC,useCallback} from 'react'
import classes from './styles.module.scss'
interface Props{
    title: string;
    index: number;
    isActive: number;
    setSelectedTab:(index: number)=>void;
    setIsActive: (index: number)=>void;

}
const TabTitle: FC<Props>=({
    title,
    setSelectedTab,
    index,
    isActive,
    setIsActive,
})=>{
    const onClick=useCallback(()=>{
        setIsActive(index);
        setSelectedTab(index);
    },[setSelectedTab,setIsActive,index]);
    return (
        <div className={classes.tabTitle}
        style={{
           borderBottom: isActive=== index ? '2px solid white': '0',            
           backgroundColor: isActive=== index ? '#0B2944FF': 'transparent',            
          }}
        >
            <div className={classes.skillTitle} onClick={onClick}>
                {title}
            </div>
        </div>
    )
}
export default TabTitle;