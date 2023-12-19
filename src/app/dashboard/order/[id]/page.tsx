import React from "react";


type Props = {
    params : {
        id:string
    }
}

const OrderPage = ({ params: { id}} : Props) => {
  return (
    <div>
      <p>Welcome In Order With ID :{id}</p>
    </div>
  );
};

export default OrderPage;
