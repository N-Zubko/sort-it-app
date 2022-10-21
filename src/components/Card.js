function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
      FRONT OF CARD
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 wasteCardBack">
      BACK OF CARD
    </div>
  );
}

export const Card = ({ id, name, description, url, wasteType }) => {
  return (
    <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 wasteCard">
      <FrontOfCard />
      <BackOfCard />
    </div>
  );
};
