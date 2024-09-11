import {Component} from 'react'

import CountryTab from '../CountryTab'
import CountryItem from '../CountryItem'

const tabsList = [
  {
    tabId: 0,
    imageUrl: '',
    displayText: 'UnitedKingdom',
  },
  {
    tabId: 1,
    imageUrl: '',
    displayText: 'Australia',
  },
  {
    tabId: 2,
    imageUrl: '',
    displayText: 'Ireland',
  },
  {tabId: 3, imageUrl: '', displayText: 'United States'},
  {tabId: 4, imageUrl: '', displayText: 'Canada'},
  {tabId: 5, imageUrl: '', displayText: 'Germany'},
  {tabId: 6, imageUrl: '', displayText: 'Spain'},
]

const countriesList = [
  {
    counId: 0,
    countryName: 'London',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 1,
    countryName: 'Leicester',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 2,
    countryName: 'LiverPool',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 3,
    countryName: 'Sheffield',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 4,
    countryName: 'Newcastel Upon Type',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 5,
    countryName: 'Cardiff',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 6,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'United Kingdom',
  },
  {
    counId: 7,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 8,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 9,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 10,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 11,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 12,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Australia',
  },
  {
    counId: 13,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 14,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 15,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 16,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 17,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 18,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'Ireland',
  },
  {
    counId: 19,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
  {
    counId: 20,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
  {
    counId: 21,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
  {
    counId: 22,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
  {
    counId: 23,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
  {
    counId: 24,
    countryName: 'Leeds',
    imageUrl: '',
    category: 'UnitedStates',
  },
]

class Country extends Component {
  state = {activeTabId: tabsList[0].tabId, searchInput: ''}

  onChangeIn = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = countriesList.filter(
      eachG => eachG.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const {searchInput, activeTabId} = this.state
    const getFiltered = countriesList.filter(eachS =>
      eachS.countryName.includes(searchInput),
    )

    const filteredProjects = this.getFilteredProjects(getFiltered)
    return (
      <div>
        <div>
          <input
            type='search'
            placeholder='search'
            onChange={this.onChangeIn}
          />
        </div>
        <ul>
          {tabsList.map(each => (
            <CountryTab
              countryTabDetails={each}
              key={each.tabId}
              updateActiveTabId={this.updateActiveTabId}
              isActive={activeTabId === each.tabId}
            />
          ))}
        </ul>
        <ul>
          {countriesList.map(eachA => (
            <CountryItem countryDetails={eachA} key={eachA.appId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Country
