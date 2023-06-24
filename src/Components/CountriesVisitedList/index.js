import './index.css'

const CountriesVisitedList = props => {
  const {countriesVisited, changeVisitedList} = props
  const {id, name, imageUrl} = countriesVisited
  console.log(countriesVisited === 2)
  const userChoice = () => {
    changeVisitedList(id)
    console.log(`remove id ${id}`)
  }

  return (
    <div className="visited-countries-container">
      <img
        src={imageUrl}
        alt="thumbnail"
        className="visited-countries-images"
      />
      <div className="name-button-container">
        <p className="name">{name}</p>

        <button type="button" onClick={userChoice} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CountriesVisitedList
