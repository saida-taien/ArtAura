import PropTypes from 'prop-types';
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';
const CraftItemCard = ({ item }) => {
    // console.log(item);
    return (
        <div className="card w-96  shadow-2xl">
            <figure><img src={item.photo}  /></figure>
            <div className="card-body">
                <h2 className="card-title font-sedan">{item.name}</h2>
                <div className='flex py-2'><p><strong>Price</strong> : {item.price}</p>
                <p className='flex gap-2'><IoMdStar />{item.rating}</p>
                <p><strong>Processing : </strong>{item.processing} days</p></div>
                <div className="card-actions justify-center">
                    <Link to={`/viewDetails/${item._id}`}><button className="btn border-0 text-white hover:text-black bg-[#e65b56]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
CraftItemCard.propTypes = {
    item: PropTypes.node,
}
export default CraftItemCard;