// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import TopicsLayout from 'src/layouts/TopicsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TopicsLayout}>
        <Route path="/topics/new" page={TopicNewTopicPage} name="newTopic" />
        <Route path="/topics/{id:Int}/edit" page={TopicEditTopicPage} name="editTopic" />
        <Route path="/topics/{id:Int}" page={TopicTopicPage} name="topic" />
        <Route path="/topics" page={TopicTopicsPage} name="topics" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
