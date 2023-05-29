import React,{FC,ReactNode} from "react";

interface Props{
    title: string;
    children: ReactNode;
}

const Tab: FC<Props>=({children})=>{
    return <div>
        {children}
    </div>
}
export default Tab;