/* <div className="col">
  <h5 className='text-capitalize text-muted'>{this.state.name} {this.state.surname}</h5>
  {this.state.details.map((data,index)=>(
    <div key={index} className='d-inline'>
      <p className='d-inline p-1 bg-light  text-danger'>{data}</p>
      <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleDelete(data)}>X</button>
    </div>
  ))}
  {this.state.experience.map(data=>(
    <div key={data.id} className='d-inline'>
      <p className='text-danger'>{data.name}(<span className='text-muted'>{data.duration}</span>)</p>
      <p className='text-danger'>{data.role}</p>
      <p className='text-danger'>{data.description}</p>
      <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleGeneralDelete('experience',data.id)}>Remove Experience</button>
    </div>
  ))}
  {this.state.education.map(data=>(
    <div key={data.id} className='d-inline'>
      <p className='text-danger'>{data.name}(<span className='text-muted'>{data.score}</span>)</p>
      <p className='text-danger'>{data.university}</p>
      <p className='text-danger'>{data.standard}</p>
      <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleGeneralDelete('education',data.id)}>Remove Education</button>
    </div>
  ))}
  {this.state.extradetails.map(data=>(
    <div key={data.id} className='d-inline'>
      <p className='text-danger'>{data.title}</p>
      {data.description.map(data => <button key={data} className='btn btn-sm btn-info'>{data}</button>)}
      <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleGeneralDelete('extradetails',data.id)}>Remove {data.title}</button>
    </div>
  ))}
</div> */

import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';

export class PreviewContainer extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Table title='Education' entries={['name','university','score','standard','delete']} handleDelete={this.props.handleGeneralDelete} data={this.props.education} />
      </React.Fragment>
    )
  }
}

const Preview =(props) => ReactDOM.createPortal(<PreviewContainer {...props} />,document.getElementById('modal'));

export default Preview;
