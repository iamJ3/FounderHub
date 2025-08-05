import React from 'react'

const user = ({params}:{params:{id:string}}) => {
    const {id} = params;
  return (
    <div>
        
       user{id}
    </div>
  )
}

export default user