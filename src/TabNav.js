import './App.css';
import { useState } from 'react';
import TabNavItem from 'TabNavItem.js'
import TabContent from 'TabContent.js'

function TabNav() {
    const [activeTab, setActiveTab] = useState('MyTask')

    return (

       
           

            <div className="Tabs">
                <ul className="nav">
                    <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                </ul>
            </div>

            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <p>Tab 1 works!</p>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <p>Tab 2 works!</p>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <p>Tab 3 works!</p>
                </TabContent>
            </div>

    )
};
export default TabNav;