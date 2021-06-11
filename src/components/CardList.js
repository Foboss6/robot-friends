import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  // throwing an error to test my ErrorBoundle.js
  // throw new Error('Aaaaaaaa its an error!!!');
  const cards = robots.map((user) => {
    return <Card key={user.id} id={user.id} name={user.name} username={user.name} email={user.email}/>
  })
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList;