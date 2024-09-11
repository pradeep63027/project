import './index.css'

const CountryItem = props => {
  const {countryDetails} = props
  const {imageUrl, countryName} = countryDetails
  return (
    <li className="country-item">
      <img className="country-image" src={imageUrl} alt={countryName} />
      <p className="country-name">{countryName}</p>
    </li>
  )
}

export default CountryItem
