function ProjectItem(props) {
  const handleRedirect = () => {
    window.open(props.link);
  };

  const usedList = props.used.map((tag) => {
    return <span class="tag ml-1">{tag}</span>;
  });

  return (
    <div className="card my-project" onClick={handleRedirect}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt={props.name} />
        </figure>
      </div>
      <div class="card-content">
        <h4 className="title">{props.name}</h4>
        <div className="made-for">
          <i>Made for:</i>
          <img src={props.madeFor} alt="Made for this entity" />
        </div>
        <div className="mt-3">Core technologies: {usedList}</div>
        <p>{props.desc}</p>
        <b>Click on the item to visit the project's site!</b>
      </div>
    </div>
  );
}

export default ProjectItem;
