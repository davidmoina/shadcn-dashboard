import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData() {
  return payments;
}

export default async function DataTablePage() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
