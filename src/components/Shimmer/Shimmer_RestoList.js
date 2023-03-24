const Shimmer_RestoList = () => {
  return (
    <div className="shimmer-restolist-container container">
      {console.log("Inside Shimmer UI")}
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index} className="shimmer-restolist-card">
              <div className="shimmer-restolist-top-div"></div>
              <div className="shimmer-restolist-middle-div"></div>
              <div className="shimmer-restolist-bottom-div"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer_RestoList;
