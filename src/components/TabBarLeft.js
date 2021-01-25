import React from "react";
import "./styled/base.css";

export const TabBarLeft = ( { setDataFilter } ) => {
    const [ selectTab, setSelectTab ] = React.useState((name)=>{
        if(!selectTab){
            return 'All';
        }
        return name;
    })
    const changeData = e => {
        setDataFilter(e.target.value);
    };
    return <div className='tabBox'>
        <div className='tab'>
            <a className={selectTab==='All'?'tabActive':''} href='/#' onClick={()=>{setSelectTab('All')}}>All</a>
            <a className={selectTab==='Physical'?'tabActive':''} href='/#' onClick={()=>{setSelectTab('Physical')}}>Physical</a>
            <a className={selectTab==='Virtual'?'tabActive':''} href='/#' onClick={()=>{setSelectTab('Virtual')}}>Virtual</a>
        </div>
        <div className='searchBox'>
            <input onChange={(e)=>{changeData(e)}} />
            <i className='icon-search'></i>
        </div>
    </div>
};