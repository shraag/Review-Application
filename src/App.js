import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
 
function App() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');

 

    const handleChange =(e)=>{
      setName(e.target.value);
    }

   
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }

    
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
 
    const handleSubmit=(e)=>{
      
        // display alert box with review details .
        alert('A form was submitted with Name :"' + name +
        '" ,Rating :"'+age +'" and Review :"' + email + '"');
      
      e.preventDefault();
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     
    <h3> Review Form </h3>
        <label >
          Class Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
          
        <label >
          Rating (out of 5):
        </label><br/>
        <input type="number" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
           
        <label>
          Review:
        </label><br/>
        <input type="text" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
          
        
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
 
export default App;