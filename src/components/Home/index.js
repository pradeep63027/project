import {Component} from 'react'

import Header from '../Header'
import Country from '../Country'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-container">
          <h1>Home away from home</h1>
          <p>
            Book student accomidations near top universities and cities across
            the globe
          </p>
          <ul className="promises">
            <button type="button">Verified Properties</button>
            <button type="button">24*7 Assistance</button>
            <button type="button">Lowest prize guarantee</button>
          </ul>
        </div>
        <div>
          <input type="search" />
          <h1>knlwnvnf</h1>
          <p>kqjjhbecx reuifh;wqirnfjknjc</p>
          <Country />
        </div>
      </div>
    )
  }
}

export default Home
