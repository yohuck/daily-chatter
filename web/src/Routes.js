// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { useAuth } from '@redwoodjs/auth'
import { Router, Route, Set, Private } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import PromptsLayout from 'src/layouts/PromptsLayout'
import ResponsesLayout from 'src/layouts/ResponsesLayout'
import TopicsLayout from 'src/layouts/TopicsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import UsersubsLayout from 'src/layouts/UsersubsLayout'

const Routes = () => {
  const { currentUser } = useAuth()
  return (
    <Router>
      <Route path="/stripe-demo" page={StripeDemoPage} name="stripeDemo" />
      <Private admin="true" unauthenticated="home">
        <Set wrap={UsersubsLayout}>
          <Route path="/admin/usersubs/new" page={UsersubNewUsersubPage} name="newUsersub" />
          <Route path="/admin/usersubs/{id:Int}/edit" page={UsersubEditUsersubPage} name="editUsersub" />
          <Route path="/admin/usersubs/{id:Int}" page={UsersubUsersubPage} name="usersub" />
          <Route path="/admin/usersubs" page={UsersubUsersubsPage} name="usersubs" />
        </Set>
        <Set wrap={ResponsesLayout}>
          <Route path="/admin/responses/new" page={ResponseNewResponsePage} name="newResponse" />
          <Route path="/admin/responses/{id:Int}/edit" page={ResponseEditResponsePage} name="editResponse" />
          <Route path="/admin/responses/{id:Int}" page={ResponseResponsePage} name="response" />
          <Route path="/admin/responses" page={ResponseResponsesPage} name="responses" />
        </Set>
        <Set wrap={PromptsLayout}>
          <Route path="/admin/prompts/new" page={PromptNewPromptPage} name="newPrompt" />
          <Route path="/admin/prompts/{id:Int}/edit" page={PromptEditPromptPage} name="editPrompt" />
          <Route path="/admin/prompts/{id:Int}" page={PromptPromptPage} name="prompt" />
          <Route path="/admin/prompts" page={PromptPromptsPage} name="prompts" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={TopicsLayout}>
          <Route path="/admin/topics/new" page={TopicNewTopicPage} name="newTopic" />
          <Route path="/admin/topics/{id:Int}/edit" page={TopicEditTopicPage} name="editTopic" />
          <Route path="/admin/topics/{id:Int}" page={TopicTopicPage} name="topic" />
          <Route path="/admin/topics" page={TopicTopicsPage} name="topics" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/view-responses" page={ViewTopicsPage} name="viewTopics" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/choose-topic" page={ChooseTopicPage} name="chooseTopic" />
        <Route path="/choose-prompt/{id:Int}" page={ChoosePromptPage} name="choosePrompt" />
        <Route path="/responses-to-prompt/{id:Int}" page={ResponsesToPromptPage} name="responsesToPrompt" />
        <Route path="/direct-prompt-response/{id:Int}" page={DirectPromptResponsePage} name="directPromptResponse" />
        <Route path="/submit-response" page={SubmitResponsePage} name="submitResponse" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/settings" page={SettingsPage} name="settings" />
      </Set>
    </Router>
  )
}

export default Routes
