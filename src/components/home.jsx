import React from 'react'
import { useAuth } from '../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello this is Home</div>
    )
}

export default Home