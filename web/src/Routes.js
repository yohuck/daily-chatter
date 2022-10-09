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
import PromptsLayout from 'src/layouts/PromptsLayout'
import ResponsesLayout from 'src/layouts/ResponsesLayout'
import TopicsLayout from 'src/layouts/TopicsLayout'
import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ResponsesLayout}>
        <Route path="/responses/new" page={ResponseNewResponsePage} name="newResponse" />
        <Route path="/responses/{id:Int}/edit" page={ResponseEditResponsePage} name="editResponse" />
        <Route path="/responses/{id:Int}" page={ResponseResponsePage} name="response" />
        <Route path="/responses" page={ResponseResponsesPage} name="responses" />
      </Set>
      <Set wrap={PromptsLayout}>
        <Route path="/prompts/new" page={PromptNewPromptPage} name="newPrompt" />
        <Route path="/prompts/{id:Int}/edit" page={PromptEditPromptPage} name="editPrompt" />
        <Route path="/prompts/{id:Int}" page={PromptPromptPage} name="prompt" />
        <Route path="/prompts" page={PromptPromptsPage} name="prompts" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={TopicsLayout}>
        <Route path="/topics/new" page={TopicNewTopicPage} name="newTopic" />
        <Route path="/topics/{id:Int}/edit" page={TopicEditTopicPage} name="editTopic" />
        <Route path="/topics/{id:Int}" page={TopicTopicPage} name="topic" />
        <Route path="/topics" page={TopicTopicsPage} name="topics" />
      </Set>

      <Set wrap={MainLayout}>
        <Route path="/view-topics" page={ViewTopicsPage} name="viewTopics" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/choose-topic" page={ChooseTopicPage} name="chooseTopic" />
        <Route path="/submit-response" page={SubmitResponsePage} name="submitResponse" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
    </Router>
  )
}

export default Routes
