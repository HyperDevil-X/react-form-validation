import React from "react";
import {useForm} from 'react-hook-form';

function App()
{
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  }=useForm ();
  const password = watch("password");
  const submitForm = (data) => console.log(data);
  return (
    <div className="container">
    <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" name="firstname" placeholder="Enter your firstname" spellCheck="true" autoComplete="off" autoFocus 
        {...register(
          "firstname",
          {
            required: "Please Enter the Firstname",
            minLength: 
            {value: 3,
              message: "First Name should be more than 2 characters"
            }})} />
            <div className="error">{errors.firstname && <p>{errors.firstname.message}</p>}</div>

            <br/><br/>

            <input type="text" name="lastname" placeholder="Enter your lastname" spellCheck="true" autoComplete="off"
            {...register(
              "lastname",
              {
                required:"Please enter the Lastname",
                minLength:{
                  value:3,
                  message:"Last Name should be more than 2 characters"
                }
              }
            )}/>
            <div className="error">{errors.lastname && <p>{errors.lastname.message}</p>}</div>

            <br/><br/>

            <input type="number" name="phnumber" placeholder="Enter your ph no" 
            {...register("phnumber", {
              required: "Please enter the Phone number",
              minLength: {
                value: 10,
                message: "Phone number should be  10 digits"
              },
              maxLength: {
                value: 10,
                message: "Phone number shouldnot be more than 10 digits"
              }
            })}
          />
          <div className="error">{errors.phnumber && <p>{errors.phnumber.message}</p>}</div>

          <br/><br/>

          <input type="mail" name="email" placeholder="Enter your email" autoComplete="off" spellCheck="true"
          {...register("email",{
            required:"Please enter the email",
          
          pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message:"Please enter a valid email address"
          }
        }
          )}
          />
          <div className="error">{errors.email && <p>{errors.email.message}</p>}</div>

          <br/><br/>

          <input type="password" name="password" placeholder="Enter your password" 
          {...register("password",
            {
            required: "Please enter your password",
            minLength:{
              value:6,
              message:"Password should be at least 6 characters long"
            }
            }
          )}
          />
          <div className="error">{errors.password && <p>{errors.password.message}</p>}</div>
          <br/><br/>

          <input type="password" name="retypepassword" placeholder="Retype your password"
          {...register("retypepassword",
            {
              required:"Please Retype your password",
              validate:value=> value === password || "Password do not match"
            }
          )}
          />
          <div className="error">{errors.retypepassword && <p>{errors.retypepassword.message}</p>}</div>

          <br/><br/>
        <input type="submit" name="sbtn" value="submit" id="submitbutton"/>
        </form>
    </div>
  )
}
export default App;