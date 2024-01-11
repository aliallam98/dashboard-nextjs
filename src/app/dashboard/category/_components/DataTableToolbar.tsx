"use client"

import { X} from "lucide-react"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"

import { priorities, statuses } from "./data/data"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between px-4 mt-4">
      <div className="flex flex-1 items-center space-x-2">
        {/* Search Input For Emails */}
      <Input
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm focus-visible:ring-transparent w-[250px]"
          />

        {/* Display Only Rows That Has These Selected Values */}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Select Which Cols Display */}
      <DataTableViewOptions table={table} />
    </div>
  )
}

//This component has 3 features and has 2 reuseable components (DataTableFacetedFilter,DataTableViewOptions)
// 1 - filter input by keyword
// 2 - filter by select the kind of the status
// 3 - appear and disappears cols 