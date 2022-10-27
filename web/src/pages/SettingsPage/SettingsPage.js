import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import UserSubCell from 'src/components/UserSubsCell'

import SettingsRedir from './SettingsRedir'

const SettingsPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return isAuthenticated ? (
    <div className='flex flex-col items-center'>
      <MetaTags title="Settings" description="Settings page" />
      <p className="w-11/12 max-w-md text-center">Welcome {currentUser.email}</p>
      <button
        className="m-2 flex  items-center rounded-lg  bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-400  dark:bg-neutral-900 dark:hover:bg-neutral-800"
        onClick={logOut}
      >
        logout
      </button>
      <hr></hr>
      <UserSubCell id={currentUser.id} />

    </div>
  ) : (
    <SettingsRedir />
  )
}
export default SettingsPage
