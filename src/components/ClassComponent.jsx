import React from 'react'

class ClassComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'',
            depart:'',
            rate:'',
            arr:[],
            showName:false
        }
    }

    updateName = (event) =>{
        this.setState({name:event.target.value})
    }
    updateDepart = (event) =>{
        this.setState({depart:event.target.value})
    }
    updateRate = (event) =>{
        this.setState({rate:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = this.state.arr
        updateArray.push({name:this.state.name,depart:this.state.depart,rate:this.state.rate})
       this.setState({showName: true,arr:updateArray})
    }

render(){
    return(
        <div>
            <h1 style={{color:"red"}}>EMPLOYEE FEEDBACK FORM</h1>
            <form action="">
            <label > Name:</label>
             <input type="text" value={this.state.name} onChange={this.updateName}/> <br /> <br />
             <label > Department:</label>
             <input type="text" value={this.state.depart} onChange={this.updateDepart}/> <br /> <br />
             <label >Rating:</label>
            <input type="text" value={this.state.rate} onChange={this.updateRate}/><br /> <br />
            </form> <br />
             <button onClick={this.handleShowName}>SUBMIT</button>
        {this.state.showName && 
        <p id="outerbox">
         {this.state.arr.map(item =>{
         return(
                 <p id="innerbox">{`Name :${item.name} | Department : ${item.depart} | Rating :${item.rate}`}</p>
            )
         })
        }
        </p>
   }
       </div> 
        
    )
 }
}

export default ClassComponent;