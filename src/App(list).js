import { useState , useEffect} from "react";


function App() {
  const [value,setValue] = useState("");
  const [values,setValues] = useState([]);
  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault();
    if (value === ""){
      return;
    }
    setValues(currentArray => [value, ...currentArray]);
    setValue("");
  };
  return (
    <div>
      <h1>My values ({values.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="Write your to do..."/>
        <button>Add to Do</button>
      </form> 
      <hr></hr>
      <ul>
        {values.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

//export default App;
