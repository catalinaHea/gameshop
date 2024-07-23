import React, { useState } from 'react'
import "./contact.css"

const Contact = () => {

    const[user, setUser] = useState(
        {
            Name:'', email:'', subject: '', Message: ''
        }
    )

    let values, names
    const data = (e) => 
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) => 
        {
            const {Name, email, subject, Message} = user
            e.preventDefault()
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify({
                    Name, email, subject, Message
                })
            }
    
            const send = await fetch(
                'https://gameshop-contact-default-rtdb.firebaseio.com/Message.json', option
                )
    
            if (send) {
                alert("Message Sent")
            }
            else
            {
                alert("Error Occoured Message Sent failed")
            }
    
        }

  return (
    <>
        <div className='contact'>
            <div className='container'>
                <div className='form'>
                    <h2>
                        #Contact us
                    </h2>
                    <form method='POST'>
                        <div className='box'>
                            <div className='lable'>
                                <h4>
                                    Name
                                </h4>
                            </div>
                            <div className='input'>
                                <input type='text' onChange={data} name='Name' value={user.Name}/>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>
                                    Email
                                </h4>
                            </div>
                            <div className='input'>
                                <input type='email' onChange={data} name='email' value={user.email}/>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>
                                    Subject
                                </h4>
                            </div>
                            <div className='input'>
                                <input type='text' onChange={data} name='subject' value={user.subject}/>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>
                                    Message
                                </h4>
                            </div>
                            <div className='input'>
                                <textarea onChange={data} name='Message' value={user.Message}/>
                            </div>
                        </div>
                        <button type='submit' onClick={send}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact