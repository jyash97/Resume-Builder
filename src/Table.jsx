import React from 'react';

class Table extends React.Component{
  render(){
    return(
      <table className="table table-striped table-hover table-light">
        <thead className='thead-dark'>
          <tr>
            {
              this.props.entries.map(
                data => <th key={data} className='text-capitalize'>{data}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map(
              (data,index) => (
                <tr key={index}>
                  {
                    this.props.entries.map(
                      name => {
                        if(name === 'delete'){
                          return <td key={name}><button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.props.handleDelete('education',this.props.data[index]['id'])}>Remove {this.props.title}</button></td>
                        }
                        return <td key={name} className='text-capitalize'>{this.props.data[index][name]}</td>
                      }
                    )
                  }
                </tr>
              )
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Table;
