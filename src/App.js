import { useEffect, useState } from 'react';

import { Places } from './places';

import Header from './components/header';
import ListItem from './components/common/ListItem';

const filterButtons = [
  { name: 'Bus Stops', type: 'BUS_STOP', },
  { name: 'Attractions', type: 'ATTRACTION', },
  { name: 'Parks', type: 'PARK', },
  { name: 'Museums', type: 'MUSEUM', },
];

function App() {
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState(Places);

  const handleFilter = (type) => {
    if (filteredTypes.includes(type)) {
      const types = Array.from(filteredTypes);
      types.splice(types.indexOf(type), 1);
      setFilteredTypes(types);
    } else {
      setFilteredTypes([...filteredTypes, type]);
    }
  }

  useEffect(() => {
    if (filteredTypes.length === 0) {
      setFilteredPlaces(Places);
    } else {
      setFilteredPlaces(Places.filter(place => filteredTypes.includes(place.type)));
    }
  }, [filteredTypes]);

  return (
    <div className="app">
      <Header
        {...{
          filterButtons,
          filteredTypes,
          handleFilter
        }}
      />
      <div>
        {filteredPlaces.map(place => (
          <ListItem
            key={place.name}
            type={place.type}
            name={place.name}
            description={place.description}
            number={place.number}
            tags={place.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
