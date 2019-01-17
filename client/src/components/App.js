import React from "react";
import "./App.pcss";
import Loading from "./Loading";
import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";
import { Switch, Route } from "react-router";

class App extends React.Component {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        {loading && <Loading />}

        <h1>Jankon Betoni ERP</h1>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/person/:id" component={PersonPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
