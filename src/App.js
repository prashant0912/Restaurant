import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {Restaurant} from "./components/RestaurantDetails"


function App() {
  const [check,setCheck] = useState([]);
  const [show,setShow] = useState([])
  
  const [formdata,setFormdata] = useState({
   
})

  useEffect(()=>{
    getdata()
  },[])

  const getdata = async ()=>{
    const data = await fetch("http://localhost:8080/data").then((d)=>
    d.json()
    );
    setCheck(data)
    setShow(data)
    
    
}
const handlechange = (e)=>{
  const{id,value} = e.target

  setFormdata({
    ...formdata,
    [id]:value,
  })
  
}
const handlesubmit = (e)=>{
  e.preventDefault();
  fetch("http://localhost:8080/data",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(formdata)
  }).then(()=>{
    getdata()
  })

}








  
  return (
    <div className="App">
      <div>
      <h1>ADD RESTAURANTS</h1>
        <form onSubmit = {handlesubmit}>
          <label>Name Of Restaurant</label>
          <input onChange = {handlechange} id = "name"type = "text"/><br/>
          <label>Image Of Restaurant</label>
          <input onChange = {handlechange} id = "img" type = "text"/><br/>
          <label>Votes Of Restaurant</label>
          <input onChange = {handlechange} id = "votes"type = "number"/><br/>
          <label>Reviews Of Restaurant</label>
          <input onChange = {handlechange} id = "Reviews"type = "number"/><br/>
          <label>Cost Of Restaurant</label>
          <input onChange = {handlechange} id = "Cost"type = "number"/><br/>
          <label>Payment Of Restaurant</label>
          <input onChange = {handlechange} id = "Payment"type = "text"/><br/>
          <label>Categories Of Restaurant</label>
          <input onChange = {handlechange} id = "Categories"type = "text"/><br/>
          <label>Rating Of Restaurant</label>
          <input onChange = {handlechange} id = "rating"type = "text"/><br/>
          <input type = "submit"/>
          
        </form>
      </div>


      
      <div>Sort Restaurants by Rating</div>
      <div id = "butt_box">
        <div> 
            </div>
            <div> 
          <button className="butt" onClick = {(()=>{
          
            getdata()

            
            })}>All Restaurants</button>
            </div>
            <div> 
          <button className="butt" onClick = {(()=>{
            
            
            setShow(
            check.filter(function(el){
              return el.rating>2;
            }).sort(function(a,b){
              return a.rating-b.rating
            }))

            
            })}> 2star</button>
            </div>
            <div> 
          <button className="butt" onClick = {(()=>{
            
            setShow(
            check.filter(function(el){
              return el.rating>3;
            }).sort(function(a,b){
              return a.rating-b.rating
            }))

            
            })}>3star</button>
            </div>
            <div> 
          <button className="butt" onClick = {(()=>{
            
            setShow(
            check.filter(function(el){
              return el.rating>4;
            }).sort(function(a,b){
              return a.rating-b.rating
            }))

            
            })}>4star</button>
            </div>
            <div> 
          <button className="butt" onClick = {(()=>{
            
            setShow(
            check.filter(function(el){
              return el.rating>=5;
            }).sort(function(a,b){
              return a.rating-b.rating
            }))

            
            })}>5star</button>
            </div>
           
            </div>
      <div id = "box">

      

    
    
      
      {show.map((e)=>{
        return <Restaurant name = {e.name} image = {e.img} vote = {e.votes} review ={e.Reviews} cost = {e.Cost} payment={e.Payment} categories={e.Categories} rating = {e.rating} />

      })}
      
      
      </div>
    </div>
  );
}

export default App;
