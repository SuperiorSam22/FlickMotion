import React from 'react'
import ContentWrapper from '../../../components/contenetWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
//we have to call api here too 


const Trending = () => {
  return (
    <div className='carouselSection'>
        <ContentWrapper>    
            <span className="carouselTitle">Trending</span> 
            <SwitchTabs data={["Day", "Week"]} />   
            
            
        </ContentWrapper>    
        
    </div>
  )
}

export default Trending;