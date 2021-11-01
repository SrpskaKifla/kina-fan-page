import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./helpers/UserContext";
import Register from "./pages/forms/register/Register";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Quiz from "./pages/quiz/Quiz";
import QuizResults from "./pages/quizResults/QuizResults";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/quiz" component={Quiz} exact/>
            <Route path="/quiz-results" component={QuizResults} exact/>
            <Route path="/register" component={Register} exact/>
            <Route component={PageNotFound}/>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
