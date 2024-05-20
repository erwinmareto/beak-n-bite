const ConceptCard = ({ img, name, price, benefits }) => {
  return (
    <article className="concept-card w-[25rem] flex flex-col justify-center items-center bg-coral p-6 rounded-3xl max-lg:w-full">
      <img
        src={img}
        alt={name}
        height={200}
        width={200}
        className="card-content"
      />
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="card-content">
          <h2 className="text-4xl font-bright-retro text-purple">{name}</h2>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="info-text">Investasi Awal</p>
            <h2 className="text-4xl text-olive font-bright-retro">
              {price} JT
            </h2>
          </div>
        </div>
        <div>
          <ul className="list-disc list-inside">
            {benefits.map((benefit) => (
              <li
                className="info-text py-5 border-t-2 border-primary"
                key={benefit}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ConceptCard;
