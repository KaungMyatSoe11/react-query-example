"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Suspense, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTableData } from "./getTableData";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

const categoryColumns = [{ field: "name", headerName: "Name", width: 150 }];

const Table1 = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, isFetching,isRefetching } = useQuery({
    queryKey: [
      "rowdatas" + `${paginationModel.page}-${paginationModel.pageSize}`,
    ],
    queryFn: () => getTableData(paginationModel),
    placeholderData: keepPreviousData,
  });
  return (
    <>
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
        <DataGrid
          columns={categoryColumns}
          rows={data?.categories}
          pageSizeOptions={[2, 10, 25, 50, 100]}
          paginationModel={paginationModel}
          paginationMode="server"
          rowCount={data?.totalRowCount}
          loading={isFetching}
          onPaginationModelChange={setPaginationModel}
        />
      )}
    </>
  );
};

export default Table1;
