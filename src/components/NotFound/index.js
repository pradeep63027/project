import './index.css'

const NotFound = props => {
  const onClickHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <p>404</p>
      <p>Page not found</p>
      <p>
        The page you are looking for does not exist! We suggest you go back to
        the Home page or contact us at contact@amberstudent.com or call +44
        7723497306 for help.
      </p>
      <button type="submit" onClick={onClickHome}>
        Back To Home
      </button>
    </div>
  )
}

export default NotFound
