import './index.css'

const CountriesVisitedList = props => {
  const {countriesVisited, changeVisitedList} = props
  const {id, name, imageUrl} = countriesVisited

  const userChoice = () => {
    changeVisitedList(id)
    console.log(`remove id ${id}`)
  }

  return (
    <div>
      {countriesVisited.length !== 0 ? (
        <div className="visited-countries-container">
          <img
            src={imageUrl}
            alt="thumbnail"
            className="visited-countries-images"
          />
          <div className="name-button-container">
            <p className="name">{name}</p>

            <button
              type="button"
              onClick={userChoice}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>No Countries Visited Yet</p>
        </div>
      )}
    </div>
  )
}

export default CountriesVisitedList
