import React from 'react';
import {uniqueId} from 'lodash';

import Input from './Input' ;
import Preview from './Preview';
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
    this.handleGeneralDelete = this.handleGeneralDelete.bind(this);
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
      <div className='container py-4'>
        <div className='row'>
          <div className="col">
            <div className='name'>
              <input type="text" className='d-inline text-capitalize' placeholder='name' name='name' value={this.state.name} onChange={this.handleChange}/>
              <input type="text" className='d-inline text-capitalize' placeholder='surname' name='surname' value={this.state.surname} onChange={this.handleChange}/>
            </div>
            <Input names={['contact']} section='Contact' handleChange={this.handleChange} handleClick={this.handleClick}/>
            <Input names={['company','duration','role','description']} section='Experience' handleChange={this.handleChange} handleClick={this.handleExperience} />
            <Input names={['school','score','university','standard']} section='Education' handleChange={this.handleChange} handleClick={this.handleEducation} />
            <Input names={['extratitle','extratext']} section='Extra Details' handleChange={this.handleChange} handleClick={this.handleExtra} />
          </div>
        </div>
        <Preview handleGeneralDelete={this.handleGeneralDelete} education={this.state.education} />
      </div>
    );
  }
}

export default App;
