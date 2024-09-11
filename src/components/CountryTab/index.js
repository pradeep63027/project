import './index.css'

const CountryTab = props => {
  const {countryTabDetails, updateActiveTabId, isActive} = props
  const {imageUrl, displayText, tabId} = countryTabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const tabBtn = isActive ? ' tab-button active' : 'tab-b'

  return (
    <li className="country-tab">
      <button type="button" onClick={onClickTab}>
        <img src={imageUrl} alt={displayText} className={tabBtn} />
        {displayText}
      </button>
    </li>
  )
}

export default CountryTab
