import React from 'react';
import {uniqueId} from 'lodash';

import Input from './Input' ;

import './styles.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name:'',
      surname:'',
      contact:'',
      company:'',
      duration:'',
      role:'',
      description:'',
      school:'',
      university:'',
      standard:'',
      score:'',
      extratitle:'',
      extratext:'',
      extradetails:[],
      details:[],
      education:[],
      experience:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleExperience=this.handleExperience.bind(this);
    this.handleEducation=this.handleEducation.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleExtra=this.handleExtra.bind(this);
  }

  handleDelete(data){
    const a = this.state.details.filter(d => d!==data);
    this.setState({
      details:a
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleExperience(){
    const obj = {
      id:uniqueId(),
      name:this.state.company,
      role:this.state.role,
      duration:this.state.duration,
      description:this.state.description
    };
    this.setState({
      experience:[obj,...this.state.experience]
    });
  }

  handleEducation(){
    const obj = {
      id:uniqueId(),
      name:this.state.school,
      university:this.state.university,
      score:this.state.score,
      standard:this.state.standard
    };
    this.setState({
      education:[obj,...this.state.education]
    });
  }

  handleGeneralDelete(name,id){
    const datalist = this.state[name];
    const a = datalist.filter(d => d.id !== id);
    this.setState({
      [name]:a
    })
  }

  handleExtra(){
    const details = this.state.extratext.split(',')
    const obj={
      id:uniqueId(),
      title:this.state.extratitle,
      description:details
    }
    this.setState({
      extradetails:[obj,...this.state.extradetails]
    })
  }

  handleClick(){
    this.setState({
      details:[this.state.contact,...this.state.details]
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className="col">
            <input type="text" placeholder='name' name='name' value={this.state.name} onChange={this.handleChange}/>
            <input type="text" placeholder='surname' name='surname' value={this.state.surname} onChange={this.handleChange}/>
            <Input names={['contact']} section='Contact' handleChange={this.handleChange} handleClick={this.handleClick}/>
            <Input names={['company','duration','role','description']} section='Experience' handleChange={this.handleChange} handleClick={this.handleExperience} />
            <Input names={['school','score','university','standard']} section='Education' handleChange={this.handleChange} handleClick={this.handleEducation} />
            <Input names={['extratitle','extratext']} section='Extra Details' handleChange={this.handleChange} handleClick={this.handleExtra} />
          </div>
          <div className="col">
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
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
