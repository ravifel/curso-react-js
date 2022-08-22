import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ marginLeft: "2em" }}>
      <h1>Home</h1>
      <Link to="/news" >
        <Button to="/news" size="small" variant="contained">
          Página News
        </Button>
      </Link>

      <br />
      <br />
      <Link to="/counter" >
        <Button to="/counter" size="small" variant="contained">
          Página Counter
        </Button>
      </Link>
    </div>
  );
}
