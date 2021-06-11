import React from 'react';

const Card =({ id, name, username, email}) => {
  return (
    <div className='tc bg-dark-green dib br3 pa2 ma2 grow bw2 shadow-5'>
    <img alt='robot' src={`https://robohash.org/${id}3?size=200x200`}/>
      <div className='tc'>
        <h2>{name}</h2>
        <p className='b'>'{username}'</p>
        <p className='i'>{email}</p>
      </div>
    </div>
  )
}

export default Card;