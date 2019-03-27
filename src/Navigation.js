import React from 'react';

//simple navigation panel to dispay "sign out" once user logs in
const Navigation = ({onRouteChange, isSignedIn}) => {
  if(isSignedIn){
    return(
      <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 gold link bg-animate hover-bg-black pa3 pointer' onClick = {()=> onRouteChange('signout')}>Sign Out</p>
      </nav>
    );
  }

  else{
    return null;
  }
}

export default Navigation;
