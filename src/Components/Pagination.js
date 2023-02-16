import React from "react";
import { Pagination } from "@mui/material";

function PaginationResult({ toDoList, paginatedList, page }) {
  const count = Math.floor(toDoList.length / 10);
  return (
    <div>
      <div>
        <Pagination
          count={count+1}
          page={page}
          onChange={(event, value) => {
            event.preventDefault();
            paginatedList(value);
          }}
        />
      </div>
    </div>
  );
}

export default PaginationResult;
