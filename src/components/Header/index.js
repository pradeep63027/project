import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <h1 className="heading">amber</h1>
      <ul className="unorderedItems">
        <button className="listItems" type="button">
          Download App
        </button>
        <button className="listItems" type="button">
          support
          <select>
            <option hidden="hidden">Quick chat</option>
            <option>Whatsapp</option>
            <option>Facebook</option>
            <option>+918413155458</option>
          </select>
        </button>
        <button className="listItems" type="button">
          shortlist
        </button>
        <button className="listItems" type="button">
          <img
            src="https://www.freepik.com/icon/circle-user_9821720#fromView=search&page=1&position=82&uuid=1dede543-96c1-490b-a212-c57833f6c973"
            alt="profile"
            className="image"
          />
        </button>
        <button onClick={onClickLogout} type="button">
          LogOut
        </button>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
