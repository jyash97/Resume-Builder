import React from 'react';
import {uniqueId} from 'lodash';
import {Link} from 'react-router-dom';

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
      modal:false,
      score:'',
      extratitle:'',
      extratext:'',
      forward:'invisible',
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
    this.handleGeneralDelete=this.handleGeneralDelete.bind(this);
    this.handleStorage=this.handleStorage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  toggleModal(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleExperience(){
    const description = this.state.description.split(',');
    const duration = this.state.duration.split(',');
    const obj = {
      id:uniqueId(),
      name:this.state.company,
      role:this.state.role,
      duration,
      description
    };
    this.setState({
      experience:[obj,...this.state.experience]
    });
  }

  handleEducation(){
    const university = this.state.university.split(',');
    const obj = {
      id:uniqueId(),
      name:this.state.school,
      university,
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
    const obj = {
      id:uniqueId(),
      contact:this.state.contact
    };
    this.setState({
      details:[obj,...this.state.details]
    });
  }

  handleStorage(){
    const resumeData = JSON.stringify(this.state);
    localStorage.setItem('resumedata',resumeData);
    this.setState({
      forward:'visible'
    })
  }

  // React LifeCycles Method for Saving and Loading State using Local Storage

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('resumedata'));
    if(data !== null && data !== undefined){
      this.setState({
        education:data.education,
        name:data.name,
        surname:data.surname,
        experience:data.experience,
        details:data.details,
        extradetails:data.extradetails,
        forward:'visible'
      })
    }
  }

  render() {
    return (
      <div className='container py-4'>
        <div className="alert alert-warning rounded-0" role="alert">
          Your Saved Data will be loaded automatically, Check Preview and Edit to see the Saved Data.
        </div>
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
        <button className='btn btn-outline-danger text-capitalize rounded-0' onClick={this.toggleModal}>Preview and Edit</button>
        <button className='btn btn-outline-info text-capitalize mx-4 rounded-0' onClick={this.handleStorage}>Save Data</button>
        <Link to='/resume' className={'btn btn-outline-success text-capitalize rounded-0 ' + this.state.forward}>Next</Link>
        <Preview handleGeneralDelete={this.handleGeneralDelete} modal={this.state.modal} toggleModal={this.toggleModal} name={this.state.name} surname={this.state.surname} details={this.state.details} extradetails={this.state.extradetails} experience={this.state.experience} education={this.state.education} />
      </div>
    );
  }
}

export default App;
