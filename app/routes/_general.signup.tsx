import React, { useState } from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { isValidEmail } from '@/utils/validations.utils'
import axios from 'axios'
import { redirect, useLocation, useNavigate } from '@remix-run/react'


export default () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const signupHandler = async () => {
    if (!isValidEmail(email ?? '')) return alert('The emails is not valid')
    if (!name) return alert('The name is required')
    if ((password?.length ?? 0) < 6) return alert('The password must be at lest 6 characters long')
  
    try {
      setIsLoading(true)
      const { data: { token } } = await axios.post<{ token: string }>('http://localhost:3001/api/users', {
        email, name, password
      })
      localStorage.setItem('token', token)
      navigate('/')
    } catch (error) {
      console.error(error)
      alert('There was an unexpected error!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <label>
        <div>Email</div>
        <Input value={email ?? ''} onChange={(value) => setEmail(value)} disabled={isLoading} />
      </label>
      <label>
        <div>Name</div>
        <Input value={name ?? ''} onChange={(value) => setName(value)} disabled={isLoading} />
      </label>
      <label>
        <div>Password</div>
        <Input type="password" value={password ?? ''} onChange={(value) => setPassword(value)} disabled={isLoading} />
      </label>
      <Button onClick={signupHandler} isLoading={isLoading}>
        Sign up
      </Button>
    </div>

  )
}
