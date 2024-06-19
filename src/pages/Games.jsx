function Games() {
  console.log("games");
  return (
    <div className="mt-24 mx-6">
      <h1 className="text-2xl mb-6">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Array.from({ length: 6 }).map((_, index) => {
          let colSpanClass = "";
          if (index === 0 || index === 5 || index === 4) {
            colSpanClass = "md:col-span-2 lg:col-span-2 xl:col-span-2";
          }

          return (
            <div
              key={index}
              className={`card bg-primary text-primary-content ${colSpanClass}`}
            >
              <div className="card-body">
                <h2 className="card-title">Card title {index + 1}!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
