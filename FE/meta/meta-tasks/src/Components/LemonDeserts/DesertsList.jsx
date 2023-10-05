function DessertsList(props) {

    const sortedNewDeserts = props.data
      .filter((desert) => {
        return desert.calories < 500
      })
      .sort((a, b) => {
        return a.calories - b.calories
      })
      .map((desert) => {
        return (
          <li key={desert.createdAt}>
            {desert.name} — {desert.calories}
          </li>
        )
      });
  
  return <ul>{sortedNewDeserts}</ul>
  }
  
  export default DessertsList;