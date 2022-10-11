import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

const SettingsRedir = () => {
  useEffect(() => {
    navigate(routes.home())
  }, [])
  return (
    <div>
      <p>This should refirect you</p>
    </div>
  )
}

export default SettingsRedir
