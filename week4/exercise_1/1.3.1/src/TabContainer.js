import "typeface-roboto";
import React from "react";
import AppBar from "@mui/maerial/AppBar";
import Tabs from "@mui/maerial/Tabs";
import Tab from "@mui/maerial/Tab";
import Typography from "@mui/maerial/Typography";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

const tabContentStyle = {
    padding: 16,
};

function TabContainer({ value }) {
    return (
        <AppBar position="static">
            <Tabs value={value}>
                <Tab label="Item One" component={Link} to="/" />
                <Tab label="Item Two" component={Link} to="/page2" />
                <Tab label="Item Three" component={Link} to="/page3" />
            </Tabs>
        </AppBar>
    );
}

export default function App() {
    return (
        <Router>
            <Route
            exact
            path="/"
            render={() => (
                <>
                <TabContainer value={0} />
                <Typography componet="div" style={tabContentStyle}>
                    Item One
                </Typography>
                </>
            )}
            />
            <Route
            exact
            path="/page2"
            render={() => (
                <>
                <TabContainer value={1} />
                <Typography componet="div" style={tabContentStyle}>
                    Item Two
                </Typography>
                </>
            )}
            />
            <Route
            exact
            path="/page3"
            render={() => (
                <>
                <TabContainer value={2} />
                <Typography componet="div" style={tabContentStyle}>
                    Item Three
                </Typography>
                </>
            )}
            />
        </Router>
    );
}
