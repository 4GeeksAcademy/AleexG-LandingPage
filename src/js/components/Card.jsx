const Card = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src="https://imgs.search.brave.com/2fEU2EVPe7zR5xJfECIcnsgy7f_WH78d05Aiiv4yfIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MTk4NzQ4OC9lcy9m/b3RvL2xpbmRvLXBl/cnJvLWRlLXBvbmVy/LXN1LWNhcmEtZW4t/c3VzLXJvZGlsbGFz/LXktZWwtaG9tYnJl/LXNvbnJpZW50ZS1k/ZS1sYXMtbWFub3Mt/cmFzY2Fyc2UtZWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV8tUXJHMVFpbXRY/UHR0dWVIZ1BTa2hj/aHdVY244RE50RWNs/VXBWOTkxQ2c9" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;