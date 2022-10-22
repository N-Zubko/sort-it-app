const style = {
  width: '5em',
  height: '5em',
};

const carts = {
  recycle: 'Blue Cart',
  garbage: 'Black Cart',
  compost: 'Green Cart',
  landfill: 'Landfill Drop-off',
};

function FrontOfCard({ id, name, url }) {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col gap-2 justify-center items-center bg-slate-200 transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <img src={url} alt={name} style={style} />
      <span>{name}</span>
    </div>
  );
}

function BackOfCard({ name, description, wasteType }) {
  const cart = carts[wasteType];
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col gap-2 justify-center items-center bg-amber-100 transition-all z-10 wasteCardBack">
      <h3 className="text-lg font-semibold capitalize">{name}</h3>
      <p>{description}</p>
      <span>Goes to: {cart}</span>
    </div>
  );
}

export const Card = ({ id, name, description, url, wasteType }) => {
  return (
    <div className="relative w-96 h-60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 wasteCard">
      <FrontOfCard name={name} url={url} />
      <BackOfCard name={name} description={description} wasteType={wasteType} />
    </div>
  );
};
