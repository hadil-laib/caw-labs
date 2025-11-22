import React, { useState } from 'react';
import './App.css';

// EXERCISE 1 

function ClickMe() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="component-card">
      <button onClick={() => setIsClicked(true)}>ClickMe</button>
      {isClicked && <p className="message">Clicked! </p>}
    </div>
  );
}

function ToggleClickMe() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="component-card">
      <button onClick={() => setIsClicked(!isClicked)}>Toggle ClickMe</button>
      <p className={`status ${isClicked ? 'clicked' : 'not-clicked'}`}>
        {isClicked ? 'Clicked ' : 'Not Clicked '}
      </p>
    </div>
  );
}

function ThreeButtons() {
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div className="component-card">
      <div className="button-group">
        <button onClick={() => setClickedButton(1)}>Button1</button>
        <button onClick={() => setClickedButton(2)}>Button2</button>
        <button onClick={() => setClickedButton(3)}>Button3</button>
      </div>
      {clickedButton && (
        <p className="selection-message">Button #{clickedButton} was clicked </p>
      )}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-card">
      <h1 className="counter-display">{count}</h1>
      <div className="button-group">
        <button className="inc-btn" onClick={() => setCount(count + 1)}> Inc</button>
        <button className="dec-btn" onClick={() => setCount(count - 1)}> Dec</button>
      </div>
    </div>
  );
}

//  EXERCISE 2 

function DisplayTab1() {
  const tab = ["hello", "world", "from", "react"];
  
  return (
    <div className="component-card">
      <ul className="styled-list">
        {tab.map((item, index) => (
          <li key={index} className="list-item"> {item}</li>
        ))}
      </ul>
    </div>
  );
}

function DisplayTab2() {
  const tab = ["hello", "world", "from", "react"];
  
  return (
    <div className="component-card">
      {tab.map((item, index) => (
        <div key={index} className="numbered-item">
          Element {index + 1} is: <span className="highlight">{item}</span>
        </div>
      ))}
    </div>
  );
}

function DisplayTab3() {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  
  const handleRemove = (indexToRemove) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div className="component-card">
      {tab.map((item, index) => (
        <div 
          key={index} 
          onClick={() => handleRemove(index)}
          className="clickable-item"
        >
           Element {index + 1} is: {item} <span className="click-hint">(click to remove)</span>
        </div>
      ))}
    </div>
  );
}

function DisplayTab4({ tab }) {
  const [items, setItems] = useState(tab);
  
  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div>
      {items.map((item, index) => (
        <div 
          key={index} 
          onClick={() => handleRemove(index)}
          className="clickable-item"
        >
           Element {index + 1} is: {item} <span className="click-hint">(click to remove)</span>
        </div>
      ))}
    </div>
  );
}

function DisplayTabApp() {
  const table1 = ["apple", "banana", "cherry", "date"];
  const table2 = ["red", "green", "blue", "yellow"];
  
  return (
    <div className="tables-container">
      <div className="table-column">
        <h4 className="table-title"> Fruits</h4>
        <DisplayTab4 tab={table1} />
      </div>
      
      <div className="table-column">
        <h4 className="table-title"> Colors</h4>
        <DisplayTab4 tab={table2} />
      </div>
    </div>
  );
}

// EXERCISE 3 

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setSubmitted(true);
    }
  };

  const addUser = () => {
    if (username && password) {
      setUsers([...users, { username, password, id: Date.now() }]);
      setUsername('');
      setPassword('');
      setSubmitted(false);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <label> Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="input-group">
          <label> Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>

      {submitted && (
        <div className="add-user-section">
          <p className="success-message">Form submitted! </p>
          <button onClick={addUser} className="add-btn">Add User to List</button>
        </div>
      )}

      {users.length > 0 && (
        <div className="users-list">
          <h4 className="users-title"> Users List:</h4>
          <div className="users-grid">
            {users.map(user => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <strong> {user.username}</strong>
                  <span> {user.password}</span>
                </div>
                <button onClick={() => deleteUser(user.id)} className="delete-btn">
                   Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

//  EXERCISE 4 

function DivCreator() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#667eea');
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width) {
      const newDiv = {
        id: Date.now(),
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor
      };
      setDivs([...divs, newDiv]);
      setHeight('');
      setWidth('');
      setBackgroundColor('#667eea');
    }
  };

  return (
    <div className="div-creator">
      <form onSubmit={handleSubmit} className="div-form">
        <div className="input-row">
          <div className="input-group">
            <label> Height (px): </label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              min="1"
              placeholder="100"
            />
          </div>
          <div className="input-group">
            <label> Width (px): </label>
            <input 
              type="number" 
              value={width} 
              onChange={(e) => setWidth(e.target.value)} 
              min="1"
              placeholder="100"
            />
          </div>
          <div className="input-group">
            <label> Background Color: </label>
            <input 
              type="color" 
              value={backgroundColor} 
              onChange={(e) => setBackgroundColor(e.target.value)} 
            />
          </div>
        </div>
        <button type="submit" className="create-btn">Create Div</button>
      </form>

      <div className="divs-container">
        {divs.map(div => (
          <div
            key={div.id}
            className="created-div"
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor
            }}
          >
            <span className="div-size">
              {div.width.replace('px', '')}x{div.height.replace('px', '')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

//  MAIN APP 

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="main-title">React Lab 5</h1>
        <p className="subtitle">Interactive Components Showcase</p>
      </div>
      
      {/* Exercise 1 */}
      <div className="exercise-container">
        <h2 className="exercise-title">Exercise 1 - Basic Components</h2>
        
        <div className="components-grid">
          <div className="component-section">
            <h3 className="component-subtitle">1.1 - ClickMe Button</h3>
            <ClickMe />
          </div>
          
          <div className="component-section">
            <h3 className="component-subtitle">1.2 - Toggle ClickMe</h3>
            <ToggleClickMe />
          </div>
          
          <div className="component-section">
            <h3 className="component-subtitle">1.3 - Three Buttons</h3>
            <ThreeButtons />
          </div>
          
          <div className="component-section">
            <h3 className="component-subtitle">1.4 - Counter</h3>
            <Counter />
          </div>
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="exercise-container">
        <h2 className="exercise-title">Exercise 2 - Array Display</h2>
        
        <div className="components-grid">
          <div className="component-section">
            <h3 className="component-subtitle">2.1 - Unordered List</h3>
            <DisplayTab1 />
          </div>
          
          <div className="component-section">
            <h3 className="component-subtitle">2.2 - Numbered Elements</h3>
            <DisplayTab2 />
          </div>
          
          <div className="component-section">
            <h3 className="component-subtitle">2.3 - Click to Remove</h3>
            <DisplayTab3 />
          </div>
          
          <div className="component-section full-width">
            <h3 className="component-subtitle">2.4 & 2.5 - Two Tables</h3>
            <DisplayTabApp />
          </div>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="exercise-container">
        <h2 className="exercise-title">Exercise 3 - Authentication Form</h2>
        <AuthForm />
      </div>

      {/* Exercise 4 */}
      <div className="exercise-container">
        <h2 className="exercise-title">Exercise 4 - Div Creator</h2>
        <DivCreator />
      </div>
    </div>
  );
}

export default App;