import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tab, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                onChange(index);
                setCurrentTabIndex(index);
              }}
            >
              {tab.label}
            </span>
          );
        })}
      </div>
      <div className='content'>
        {/* {tabsContent.map((tab, index) => {
          return (
            <div key={index} className='tab-content'>
              {tab.content}
            </div>
          );
        })} */}
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
