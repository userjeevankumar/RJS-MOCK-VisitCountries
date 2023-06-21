import './index.css'

const CountriesList = props => {
  const {countries, changeVisitedList} = props
  const {id, name, isVisited} = countries

  const userChoice = () => {
    changeVisitedList(id)
    console.log(`add id ${id}`)
  }

  return (
    <div className="list-name-container">
      <div className="name-visited-container">
        <p className="name-countries">{name}</p>
        {isVisited ? (
          <p>Visited</p>
        ) : (
          <button
            type="button"
            onClick={userChoice}
            className={isVisited ? 'click-button' : 'un-click-button'}
          >
            Visit
          </button>
        )}
      </div>
      <hr className="line" />
    </div>
  )
}

export default CountriesList
