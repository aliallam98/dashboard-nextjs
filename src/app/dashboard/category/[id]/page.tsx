import React from 'react'


type Props = {
  params : {
    id : string
  }
}

const page = ({ params: { id }}: Props) => {
    
  return (
    <div>
        <p>Welcome In Category ID :{id}</p>
    </div>
  )
}

export default page