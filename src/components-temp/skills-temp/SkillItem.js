import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillItem = (props) => {
    return (
        <div className='col-12 col-md-6 col-lg-4  p-2' data-aos={props.effect}>
            <div className='border px-4 py-5 skill-item'>
                <p className='skill-item-icon'><span className='border p-2'><FontAwesomeIcon icon={props.icon} /> </span></p>
                <h5 className='mt-3'>{props.name}</h5>
            </div>
        </div>
    )
}

export default SkillItem