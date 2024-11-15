/* eslint-disable react/prop-types */


const Technologies = ({ techData }) => {
  console.log(techData);


  return (
    <section
      className="row d-flex justify-content-around align-items-center pb-3 mb-5"
      style={{ height: "auto", minHeight: "50vh" }}
    >
      <h1 className="ms-2 my-3 fw-bold">{"I'm good at"}</h1>

      {
        // ITERATE OVER ARRAY
        techData?.map((item) => {

          return (
            <div
              key={item?.id}
              className="card m-2 bg-info d-flex justify-content-between py-3 shadow"
              style={{ width: "15rem", height: "15rem", backgroundImage: "" }}
            >
              {item.label}

              <button
                className="btn btn-primary"
                onClick={() => alert(`We're Learning ${item.label}`)}
              >
                Click Me
              </button>
            </div>
          );
        })
      }
    </section>
  );
};

export default Technologies;
