import React from 'react';
import ReactDOM from 'react-dom';

import ButtonWithDelete from './ButtonWithDelete';
import Table from './Table';

export class PreviewContainer extends React.Component{
  render(){
    let style = {
      opacity:0,
      display:'none'
    };
    if(this.props.modal){
      style={
        background:'rgba(51,51,51,.2)',
        display:'block',
        opacity:1,
        overflowX:'hidden',
        overflowY:'auto'
      };
    }
    return(
      <div className='modal' style={style} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" style={{width:'75%',maxWidth:'80%'}} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Preview Data</h5>
              <button type="button" className="close" onClick={this.props.toggleModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <h4 className="text-primary text-capitalize">{this.props.name} {this.props.surname}</h4>
                <ButtonWithDelete title='Details' data={this.props.details} handleDelete={this.props.handleGeneralDelete} />
                <Table title='Education' entries={['name','university','score','standard','delete']} handleDelete={this.props.handleGeneralDelete} data={this.props.education} />
                <Table title='Experience' entries={['name','role','description','duration','delete']} handleDelete={this.props.handleGeneralDelete} data={this.props.experience} />
                <Table title='ExtraDetails' entries={['title','description','delete']} handleDelete={this.props.handleGeneralDelete} data={this.props.extradetails} />
                <button className='btn btn-primary btn-block rounded-0' onClick={this.props.toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Preview =(props) => ReactDOM.createPortal(<PreviewContainer {...props} />,document.getElementById('modal'));

export default Preview;
