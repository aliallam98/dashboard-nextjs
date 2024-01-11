import { Payment, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eda52f",
      amount: 1500,
      status: "pending",
      email: "mm@example.com",
    },
    {
      id: "728efd52f",
      amount: 1100,
      status: "pending",
      email: "mmmm@example.com",
    },
    {
      id: "728edaa52f",
      amount: 15200,
      status: "pending",
      email: "mmm@example.com",
    },
    {
      id: "728edaa52f",
      amount: 15200,
      status: "pending",
      email: "mmm@example.com",
    },
    {
      id: "728edaa52f",
      amount: 15200,
      status: "pending",
      email: "mmm@example.com",
    },
    // ...
  ]
}

async function Category() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default  Category