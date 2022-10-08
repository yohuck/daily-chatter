import { useEffect, useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const ResetPasswordPage = ({ resetToken }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [])

  const passwordRef = useRef(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

      <main className="flex items-center justify-center">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="">
          <div className="">
            <header className="rounded-t-lg bg-emerald-500 shadow">
              <h2 className="p-2 font-bold dark:bg-emerald-500 dark:text-black">
                Reset Password
              </h2>
            </header>

            <div className="flex max-w-lg justify-center rounded-b-lg bg-slate-200 p-2 shadow dark:bg-neutral-700">
              <div className="">
                <Form onSubmit={onSubmit} className="">
                  <div className="">
                    <Label
                      name="password"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      New Password
                    </Label>
                    <PasswordField
                      name="password"
                      autoComplete="new-password"
                      className=""
                      errorClassName="rw-input rw-input-error"
                      disabled={!enabled}
                      ref={passwordRef}
                      validation={{
                        required: {
                          value: true,
                          message: 'Password is required',
                        },
                      }}
                    />

                    <FieldError name="password" className="rw-field-error" />
                  </div>

                  <div className="">
                    <Submit className="" disabled={!enabled}>
                      Submit
                    </Submit>
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

export default ResetPasswordPage
