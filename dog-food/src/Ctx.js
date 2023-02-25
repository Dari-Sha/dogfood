import React from "react";
import { TicketPerforated } from "react-bootstrap-icons";

export default React.createContext({
    user: "",
    token: "",
    api: "",
    setUser: () => {},
    setToken: () => {},
    setApi: () => {}
});
