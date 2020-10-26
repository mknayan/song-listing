import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Mylist from "./Components/Mylist";
import addNewSong from "./Components/AddNewSong";
import EditSong from "./Components/EditSong";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact strict />
      <Route path="/login" component={Login} exact strict />
      <Route path="/mylist" component={Mylist} exact strict />
      <Route path="/add-new-song" component={addNewSong} exact strict />
      <Route path="/edit-song/:id" component={EditSong} exact strict />
      <Route component={PageNotFound} exact strict />
    </Switch>
  );
}

export default withRouter(App);
