import React,{FC,ReactElement,useState} from "react";
import TabTitle  from './TabTitle';

interface Props{
    children: ReactElement[]

}

const Tabs: FC<Props>=({children})=>{
    const [selectedTab,setSelectedTab]=useState(0)
    const [isActive,setIsActive] = useState(0)

    return (
        <div>
            <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '10px',
                color: '#000'
              }}
            >
                {children.map((item,index)=>(
                    <TabTitle 
                    key={index}
                    title={item.props.title}
                    index={index}
                    setSelectedTab={setSelectedTab}
                    setIsActive={setIsActive}
                    isActive={isActive}
                    />
                    
                ))}
            </div>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs;