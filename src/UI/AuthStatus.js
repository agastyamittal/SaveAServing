import { useEffect, useState } from 'react'
import { sas_db } from '../DB/dbClient'

function AuthStatus() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await sas_db.auth.getUser()
      setUser(user)
    }

    getUser()

    const { data: authListener } = sas_db.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)

      }
    )

    return () => authListener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await sas_db.auth.signOut()
    localStorage.removeItem('userEmail')
    setUser(null)
  }

  return (
    <div>
      {user ? (
        <div>
          Logged in as {user.email}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  )
}

export default AuthStatus
