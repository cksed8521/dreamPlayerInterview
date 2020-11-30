import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MessageBoard from './pages/MessageBoard/MessageBoard'
import MessageList from './pages/MessageList/MessageList'
import UploadImg from './pages/UploadImg/UploadImg'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/messageboard" component={() => <MessageBoard />} />
          <Route path="/uploadimg" component={() => <UploadImg />} />
          <Route
            exact
            path="/"
            component={(props) => <MessageList {...props} />}
          />
          <Route
            path="/:id"
            component={(props) => <MessageList {...props} />}
          />
        </Switch>
      </>
    </Router>
  )
}

export default App
