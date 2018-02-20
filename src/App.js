import React from 'react';
import {uniqueId} from 'lodash';

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

  handleExperienceDelete(id){
    const a = this.state.details.filter(d => d.id!==id);
    this.setState({
      experience:a
    })
  }

  handleExtra(){
    const obj={
      id:uniqueId(),
      title:this.state.extratitle,
      description:this.state.extratext
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
            <input type="text" placeholder='contact' name='contact' value={this.state.contact} onChange={this.handleChange}/>
            <button className='btn btn-primary btn-sm m-1' onClick={this.handleClick}>Add Contact</button>
            <input type="text" placeholder='company' name='company' value={this.state.company} onChange={this.handleChange}/>
            <input type="text" placeholder='duration' name='duration' value={this.state.duration} onChange={this.handleChange}/>
            <input type="text" placeholder='role' name='role' value={this.state.role} onChange={this.handleChange}/>
            <input type="text" placeholder='description' name='description' value={this.state.description} onChange={this.handleChange}/>
            <button className='btn btn-primary btn-sm m-1' onClick={this.handleExperience}>Add Experience</button>
            <input type="text" placeholder='school' name='school' value={this.state.school} onChange={this.handleChange}/>
            <input type="text" placeholder='score' name='score' value={this.state.score} onChange={this.handleChange}/>
            <input type="text" placeholder='university' name='university' value={this.state.university} onChange={this.handleChange}/>
            <input type="text" placeholder='standard' name='standard' value={this.state.standard} onChange={this.handleChange}/>
            <button className='btn btn-primary btn-sm m-1' onClick={this.handleEducation}>Add Education</button>
            <input type="text" placeholder='extratitle' name='extratitle' value={this.state.extratitle} onChange={this.handleChange}/>
            <input type="text" placeholder='extratext' name='extratext' value={this.state.extratext} onChange={this.handleChange}/>
            <button className='btn btn-primary btn-sm m-1' onClick={this.handleExtra}>Add Extra Details</button>
          </div>
          <div className="col">
            <h6>Name and Contact</h6>
            <h5 className='text-capitalize text-muted'>{this.state.name} {this.state.surname}</h5>
            {this.state.details.map(data=>(
              <div key={data} className='d-inline'>
                <p className='d-inline p-1 bg-light  text-danger'>{data}</p>
                <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleDelete(data)}>X</button>
              </div>
            ))}
            <h6>Experience</h6>
            {this.state.experience.map(data=>(
              <div key={data.id} className='d-inline'>
                <p className='text-danger'>{data.name}(<span className='text-muted'>{data.duration}</span>)</p>
                <p className='text-danger'>{data.role}</p>
                <p className='text-danger'>{data.description}</p>
                <button className='btn btn-sm btn-danger p-1 rounded-0 d-inline' onClick={()=>this.handleExperienceDelete(data.id)}>Remove Experience</button>
              </div>
            ))}
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
