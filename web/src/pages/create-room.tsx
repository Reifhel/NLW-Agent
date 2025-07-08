import { Link } from 'react-router-dom'

export function CreateRoom() {
  return (
    <div>
      <div>Create a room</div>
      <Link to={'/room'}> Acessar Sala</Link>
    </div>
  )
}
