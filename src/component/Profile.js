import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

const Profile = () => {

    const {name,age,joke} = useSelector((state)=>state)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>I am  {name}</h2>
        <h2>my age is {age}</h2>
        <h4>{joke}</h4>
        <button onClick={()=>dispatch({type:"UPDATE_NAME"})}>update name</button>
        <button onClick={()=>dispatch({type:"UPDATE_AGE"})}>update age</button>
        <button onClick={()=>dispatch({type:"GET_JOKE"})}>joke</button>
    </div>
  )
}

export default Profile