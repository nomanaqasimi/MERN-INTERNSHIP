function CardLayout() {
  const cards = [
    { id: 1, title: "Card 1", desc: "This is the first card content." },
    { id: 2, title: "Card 2", desc: "This is the second card content." },
    { id: 3, title: "Card 3", desc: "This is the third card content." },
    { id: 4, title: "Card 4", desc: "This is the fourth card content." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <div 
          key={card.id} 
          className="p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition duration-300 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
          <p className="text-gray-600 mt-2">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default CardLayout;