import React from 'react';
import cx from 'classnames';

import Destinations from './destinations';

function Header({ filterButtons, filteredTypes, handleFilter }) {
  return (
    <header className="header">
      <Destinations />
      <div className="filter-buttons">
        {filterButtons.map(btn => (
          <button
            className={cx('btn', { selected: filteredTypes.includes(btn.type) })}
            key={btn.type}
            onClick={() => handleFilter(btn.type)}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
