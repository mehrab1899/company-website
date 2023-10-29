import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CustomLink from "../components/Link";
import { withStyles, WithStyles } from "@mui/styles";
const styles = (theme: any) => ({
  transparentBar: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    border: "1px solid red",
    color: "#FFFFFF",
  },
});

interface HeaderProps extends WithStyles<typeof styles> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.transparentBar}>
      <Toolbar>
        <img src="" alt="Company Logo" style={{ marginRight: "10px" }} />
        <div className="nav-links">
          <CustomLink url="https://example.com" color="#6aaeba">
            Home
          </CustomLink>
          <CustomLink url="https://openai.com" color="#6aaeba">
            Why Us
          </CustomLink>
          <CustomLink url="https://openai.com" color="#6aaeba">
            Services{" "}
          </CustomLink>
          <CustomLink url="https://openai.com" color="#6aaeba">
            Tech Stack
          </CustomLink>
          <CustomLink url="https://openai.com" color="#6aaeba">
            Our Work
          </CustomLink>
          <Button
            component={Link}
            to="/button"
            variant="contained"
            color="primary"
          >
            Get a Quote
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
