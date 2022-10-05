// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import VotesLayout from 'src/layouts/VotesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
      </Private>
      <Set wrap={VotesLayout}>
        <Route path="/votes/new" page={VoteNewVotePage} name="newVote" />
        <Route path="/votes/{id:Int}/edit" page={VoteEditVotePage} name="editVote" />
        <Route path="/votes/{id:Int}" page={VoteVotePage} name="vote" />
        <Route path="/votes" page={VoteVotesPage} name="votes" />
      </Set>
      <Set wrap={VotesLayout}>
        <Route path="/votes/new" page={VoteNewVotePage} name="newVote" />
        <Route path="/votes/{id:Int}/edit" page={VoteEditVotePage} name="editVote" />
        <Route path="/votes/{id:Int}" page={VoteVotePage} name="vote" />
        <Route path="/votes" page={VoteVotesPage} name="votes" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>

      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
    </Router>
  )
}

export default Routes
