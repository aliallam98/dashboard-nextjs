

export async function  POST(req:Request){

    const data = await req.json()
    console.log(data);


    return Response.json({message:"test"})
}












// export async function GET(request: Request) {

//     return Response.json({ message });
//   }