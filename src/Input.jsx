import React from 'react';

class Input extends React.Component{
  render(){
    return(
      <React.Fragment>
        {
          this.props.names.map(
            data => <input key={data} type="text" placeholder={data} name={data} value={this.props[data]} onChange={this.props.handleChange}/>
          )
        }
        <button className='btn btn-primary btn-sm m-1' onClick={this.props.handleClick}>Add {this.props.section}</button>
      </React.Fragment>
    )
  }
}

export default Input;
