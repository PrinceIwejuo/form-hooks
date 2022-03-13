import React from "react";
import { useState } from "react";

const HookForm = () => {

    let [firstname, setFirstName] = useState("")
    let [lastname, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmpassword, setConfirmPassword] = useState("")

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mt-3" />
            </form>
            <p> First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>ConfirmPassword: {confirmpassword}</p>
        </>
    )
}

export default HookForm