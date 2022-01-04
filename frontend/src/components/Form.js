import React from 'react'
const Form = ({onSubmit}) => {
    return (
      <form onSubmit={onSubmit} id="js-formSubscribe">
        <span>Join class</span>
        <input type="text" id="classId"/>
        <input type="submit" value="Done"/>
      </form>
    )
}
export default Form