import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
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