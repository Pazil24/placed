import React from 'react'

const Signin = () => {
  return(
    <div>
        <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
        </form>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Signin
        </button>
    </div>
  )
}

export default Signin