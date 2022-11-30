import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import { useState } from "react";

export default function App({ links}) {
  const [open,setOpen] = useState(false);

  function toggleDrawer({ type, key}) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  }


  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
        style={{width:250}}
        role="presentation"
        onKeyDown={toggleDrawer}
        onClick={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <Routes>
                  <Route
                  exact
                  path={link.url}
                  render={() => (
                    <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{color: "primary"}}
                    />
                  )}
                />
                <Route
                path="/"
                render={() => <ListItemText primary={link.name} />}
                />
                </Routes>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}