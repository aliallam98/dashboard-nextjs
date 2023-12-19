import React from 'react'


type Props = {
  params : {
    id : string
  }
}

const page = ({ params: { id}}:Props) => {
  return (
    <div>
        <p>Welcome In Product With ID :{id}</p>
    </div>
  )
}

export default page