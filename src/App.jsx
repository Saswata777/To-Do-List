import './App.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { IoIosAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";





function App() {

  const [task, setTask] = useState('')
  const [data, setData] = useState([])

 const addData = ()=>{
    setData([...data, {task}]);
    setTask("");
 }

 const Enterdata = (e) =>{
    if(e.key =='Enter'){
      addData();
    }
 }


 const removeData = (index)=>{
  let arr = data;
  arr.splice(index,1);
  setData([...arr]);
}


const reset =()=>{
  setData([]);
}


  return (
    <>
      <div className="container">    {/* background*/}
          <h1>To Do list</h1>
            <div className="box">  {/* div that contain header, text-field, and list*/}
              <div className="header">
                        <div className='task'>Task</div>
                        <div className='add'>ADD</div>
              </div>
              <div className="text_Field">
                        <div className="imput_field">
                              <input size="lg" type="text" placeholder="Task" className='input_task' onKeyPress={(e)=> Enterdata(e)} value={task} onChange={(event)=>setTask(event.target.value)}  />
                        </div>
                        <div className="add_button" onClick={addData}>
                              <IoIosAdd />
                        </div>
              </div>
              <div className="list">
                    {
                      data.map((element, index)=>{
                        return(
                          <div className="task_items">
                            <div className="task_items_data">{index+1}. {element.task}</div>
                            <input type="checkbox" name="" id=""  className='checkboxx'/>
                            <MdOutlineDelete  className='deleteIcon' onClick={()=>removeData(index)}/>
                          </div>
                        )
                      })
                    }
              </div>
            </div>

            <div className="reset" onClick={reset} >Reset</div>
      </div>
    </>
  )
}

export default App
