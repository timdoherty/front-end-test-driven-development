import React from 'react';

import Preview from '../Preview';

export default function List(props) {
  const {
    listItems,
    onListItemClicked,
    thumbnailSize,
    className
  } = props;

  return (
    <div className={className} >
      {listItems.map(result => (
        <Preview 
          key={result.etag}
          result={result}
          onClick={onListItemClicked}
          thumbnailSize={thumbnailSize}
        />
      ))}
    </div>
  );
}
