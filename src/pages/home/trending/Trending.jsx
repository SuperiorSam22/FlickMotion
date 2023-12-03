import React, {useState} from 'react'
import ContentWrapper from '../../../components/contenetWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
//we have to call api here too 


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const {data, loading} = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab)=> {
        setEndpoint(tab === "Day" ? "day": "week");
  }
  return (
    <div className='carouselSection'>
        <ContentWrapper>    
            <span className="carouselTitle">Trending</span> 
            <SwitchTabs data={["Day", "Week"]} 
                onTabChange={onTabChange}/>   
            
            
        </ContentWrapper>    
        
    </div>
  )
}

export default Trending;