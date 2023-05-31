import React from 'react';
import Card from './index';

const App: React.FC = () => {
  const cards = [
    {
      title: 'Card 1',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Card 2',
      content: 'Consectetur adipiscing elit.',
    },
    {
      title: 'Card 3',
      content: 'Sed do eiusmod tempor incididunt.',
    },
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default App;
