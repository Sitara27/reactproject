import React, { useState } from 'react'
import './Form.css'
import pic from '../../assets/pc.jpeg'

const Form = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    function handleEvent(e){
        e.preventDefault()
      console.log(name)
      console.log(email)
      console.log(password)
    }
    return (
        <>
            <div className="container-fluid  mb-5">
                <div className="container">
                    <div className="formSection">
                        <div className="formContent">
                            <h1>sign up for a free trail lesson by zoom</h1>
                            <p>If you encounter any issues or cannot find the free trial option, contact EduLearns customer support for assistance. They can guide you through the
                                process and help you get set up for your trial lesson.</p>
                        </div>

                        <div className="formBox">
                            <form onSubmit={handleEvent}>
                                <div class="form-group">
                                    {/* <label for="exampleInputEmail1">Name</label> */}
                                    <input type="text"
                                     class="form-control"
                                      id="exampleInputName" 
                                      placeholder="Enter name"
                                      required
                                      onChange={(e)=>setName(e.target.value)}/>

                                </div>
                                <div class="form-group">
                                    {/* <label for="exampleInputEmail1">Email address</label> */}
                                    <input type="email" class="form-control"
                                     id="exampleInputEmail1" 
                                     aria-describedby="emailHelp" 
                                     placeholder="Enter email" 
                                     onChange={(e)=>setEmail(e.target.value)}/>

                                </div>
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input type="password"
                                     class="form-control"
                                      id="exampleInputPassword1" 
                                      placeholder="Enter password" 
                                      onChange={(e)=>setPassword(e.target.value)}/>
                                </div>

                                <button type="submit"  class=" mt-3" style={{ letterSpacing: "5px" }}>Send Request</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form