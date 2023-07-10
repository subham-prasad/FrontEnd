export const Modal = ({ rocket }) => (
    <div
      className="modal fade"
      id={`popup${rocket.id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {rocket.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div
              id={`carousel${rocket.id}Controls`}
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={rocket.flickr_images[0]} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={rocket.flickr_images[1]} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={rocket.flickr_images[2]} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel${rocket.id}Controls`}
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target={`#carousel${rocket.id}Controls`}
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="row rocket-info">
                <div className="col-sm-4">
                    <h4>Height</h4>
                    <p>{rocket.height.feet}Feet </p>
                </div>
                <div className="col-sm-4">
                    <h4>Diameter</h4>
                    <p>{rocket.diameter.feet}Feet </p>
                </div>
                <div className="col-sm-4">
                    <h4>Mass</h4>
                    <p>{rocket.mass.kg/1000}Tonne </p>
                </div>
                <div className="col-sm-4">
                    <h4>First Flight</h4>
                    <p>{rocket.first_flight} </p>
                </div>
                <div className="col-sm-4">
                    <h4>Active</h4>
                    <p>{rocket.active ? `Yes` : `No`} </p>
                </div>

                <div className="col-sm-4">
                    <h4>Cost/Launch</h4>
                    <p>${rocket.cost_per_launch/1000000}Million </p>
                </div>
            </div>
            <p>{rocket.description}</p>
            <a href={rocket.wikipedia} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Learn More</a>

          </div>
        </div>
      </div>
    </div>
  );
  