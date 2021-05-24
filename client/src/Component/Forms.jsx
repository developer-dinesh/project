import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userAction } from '../redux/actions/userActions';


const Forms = () => {
  
  const [edit, setEdit] = useState(false)
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState('')
  const [color, setColor] = useState('')
  
  const dispatch = useDispatch();


  const handleSubmit = (ev) => {
    ev.preventDefault()
    const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const checkMobile = /^\d{10}$/
    if(checkEmail.test(emailId) && checkMobile.test(phoneNumber)){
      dispatch(userAction(userName, firstName, lastName, emailId, phoneNumber, bio, image, color));
   }else{
     alert("OOPS, Entered Email-Id or Phone Number is invalid!")
   }
  }
  
  const handleSelect = (ev) => {
    const setBg = {'backgroundColor':color}
    ev.preventDefault()
    if (ev.target.value === 'edit') {
      setEdit(true)
    } else {
      setEdit(false)
       
    }
  }


  return (
    <div className="container">
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <p>Select your option below:</p>
          <toggle />
          <select name='selectOption' onChange={handleSelect}>
            <option value="view">View</option>
            <option value="edit">Edit</option>
          </select><br />

          <br /><br />

          {edit ?
            <div className="form-group">
              <input type="text" name="username"
                placeholder="User Name" onChange={e=>setUserName(e.target.value)} />
              <br /><br />
              <input type="text" name="firstname"
                placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
              <br /><br />
              <input type="text" name="lastname"
                placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
              <br /><br />
              <input type="email" name="email"
                placeholder="E-mail" onChange={e=>setEmailId(e.target.value)}/>
              <br /><br />
              <input type="phone number" name="phonenumber"
                placeholder="Phone Number" onChange={e=>setPhoneNumber(e.target.value)}/> 
                 <br /><br />
              <textarea name="bio"
                placeholder="Bio" onChange={e=>setBio(e.target.value)}></textarea>
              <br /><br />
              <input type="file" name="image"
                onChange={e=>setImage(e.target.value)}/> 
              <br /><br />
              <input type="color" value={color} onChange={e => setColor(e.target.value)} /><br /><br />
            <button type="submit">Submit</button>
            </div>
            :
            <body style={{backgroundColor:color}}>
            <div className='form-group' >
              <input type="text" name="username"
                placeholder="User Name" value={userName} />
              <br /><br />
              <input type="text" name="firstname"
                placeholder="First Name" value={firstName} />
              <br /><br />
              <input type="text" name="lastname"
                placeholder="Last Name" value={lastName} />
              <br /><br />
              <input type="email" name="email"
                placeholder="E-mail" value={emailId} />
              <br /><br />
              <input type="phone number" name="phonenumber"
                placeholder="Phone Number" value={phoneNumber} />
                 <br /><br />
              <textarea name="bio"
                placeholder="Bio" value={bio}></textarea>
              <br />
              <p>File Name:{image.slice(12,)}</p>
              <p>Bg-color{color}</p> 
            </div>
            </body>
            }
        </form>
      </div>
    </div>
  )
}

export default Forms
