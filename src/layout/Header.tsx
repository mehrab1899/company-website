import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // If you are using React Router

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ flexGrow: 1 }}
        >
          <img
            src="logo.png"
            alt="Company Logo"
            style={{ marginRight: "10px" }}
          />
          Company Name
        </Typography>
        <div className="nav-links">
          <Button component={Link} to="/link1" color="inherit">
            Link 1
          </Button>
          <Button component={Link} to="/link2" color="inherit">
            Link 2
          </Button>
          <Button component={Link} to="/link3" color="inherit">
            Link 3
          </Button>
          <Button component={Link} to="/link4" color="inherit">
            Link 4
          </Button>
          <Button component={Link} to="/link5" color="inherit">
            Link 5
          </Button>
          <Button component={Link} to="/link6" color="inherit">
            Link 6
          </Button>
          <Button
            component={Link}
            to="/button"
            variant="contained"
            color="primary"
          >
            Button
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
