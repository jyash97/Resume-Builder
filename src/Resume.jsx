import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

class Resume extends React.Component{
  render(){
    let data = JSON.parse(localStorage.getItem('resumedata'));
    return(
      <React.Fragment>
        {
          data===undefined || data === null ?
            (
              <div className="alert alert-warning rounded-0" role="alert">
                You have not Saved Data, Please <Link to='/'>Go back</Link> and Save details.
              </div>
            ) : (
              <React.Fragment>
                <Header name={data.name} surname={data.surname} details={data.details}/>
              </React.Fragment>
            )
        }
      </React.Fragment>
    )
  }
}

export default Resume;
