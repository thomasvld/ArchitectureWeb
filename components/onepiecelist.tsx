"use client";

import * as React from "react";
import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function RowContextMenuOnepiece() {
  const [rows, setRows] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState<number>();
  const [image, setImage] = React.useState<String | undefined>();

  React.useEffect(function () {
    (async function () {
      const res = await fetch("/api/uploads");
      const data = await res.json();
      setRows(
        data.images
          .map((item: { id: any; name: any; imageData: any }) => ({
            id: item.id,
            name: item.name,
            image: item.imageData,
          }))
          .filter((item: { name: string }) => {
            // Mettez ici la condition de filtrage
            // Par exemple, si vous voulez filtrer les éléments dont le nom commence par "A":
            return item.name.startsWith("o");
          }),
      );
    })();
  }, []);

  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute("data-id")));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const convertToUppercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          name: row.name.toUpperCase(),
          image: row.image.toUpperCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  const convertToLowercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          name: row.name.toLowerCase(),
          image: row.image.toLowerCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    console.log("Ligne cliquée :", params.row);
    setImage(params.row.image);
  };

  return (
    <div id="divbleachlist" style={{ height: 400, width: "60%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        slotProps={{
          row: {
            onContextMenu: handleContextMenu,
            style: { cursor: "context-menu" },
          },
        }}
        onRowClick={handleRowClick}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        slotProps={{
          root: {
            onContextMenu: (e) => {
              e.preventDefault();
              handleClose();
            },
          },
        }}
      >
        <MenuItem onClick={convertToUppercase}>UPPERCASE</MenuItem>
        <MenuItem onClick={convertToLowercase}>lowercase</MenuItem>
      </Menu>
      <p>Image/ {image}</p>
    </div>
  );
}

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
  },
  {
    field: "name",
    headerName: "Name",
    width: 140,
  },
  {
    field: "image",
    headerName: "Image",
    width: 140,
  },
];
