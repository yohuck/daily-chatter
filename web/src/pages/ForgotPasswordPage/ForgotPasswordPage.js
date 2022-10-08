import { useEffect, useRef } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )

      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="rw-main flex items-center justify-center">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="">
          <div className="mt-10">
            <header className="rounded-t-lg shadow bg-emerald-500">
              <h2 className="p-2 font-bold dark:bg-emerald-500 dark:text-black">
                Forgot Password
              </h2>
            </header>

            <div className="flex max-w-lg justify-center rounded-b-lg bg-slate-200 p-2 shadow dark:bg-neutral-900">
              <div className="">
                <Form onSubmit={onSubmit} className="">
                  <div className="t">
                    <Label
                      name="username"
                      className=""
                      errorClassName="rw-label rw-label-error"
                    >
                      Username
                    </Label>
                    <TextField
                      name="username"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      ref={usernameRef}
                      validation={{
                        required: true,
                      }}
                    />

                    <FieldError name="username" className="rw-field-error" />
                  </div>

                  <div className="rw-button-group">
                    <Submit className=" m-2 flex  items-center rounded-lg bg-white p-2 shadow hover:bg-emerald-100 dark:border-emerald-400  dark:bg-neutral-900 dark:hover:bg-neutral-800">Submit</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
