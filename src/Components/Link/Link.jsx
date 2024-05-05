
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-6 hover:bg-blue-500 hover:rounded-md hover:p-1" >
            <a className='p-4' href={`route.path`}>
                {route.name}
            </a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;





