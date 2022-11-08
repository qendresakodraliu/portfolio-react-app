

const ProjectItem = (props) => {
    return (
        <div className='col-12 col-md-6 col-lg-4 p-4' data-aos={props.efect}>
            <div className="card text-dark d-flex justify-content-between h-100">
                <img src={props.image} className="card-img-top card-image" alt="PortfolioImage" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} className={props.disabled ? 'btn disabled' : 'btn'}>More Detail</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem