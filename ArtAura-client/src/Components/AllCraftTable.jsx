import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AllCraftTable = ({ items }) => {
    return (
        <tbody>
            {items.map(item => (
                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                        <p>{item.name}</p>
                    </td>
                    <td className="p-3">
                        <p>{item.rating}</p>
                    </td>
                    <td className="p-3">
                        <p>{item.customization}</p>

                    </td>
                    <td className="p-3">
                        <p>{item.processing} days</p>

                    </td>
                    <td className="p-3 text-right">
                        <p>{item.stock}</p>
                    </td>
                    <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                            <span>{item.price}</span>
                        </span>
                    </td>
                    <td>
                        <Link to={`/viewDetails/${item._id}`}><button className="btn border-0 text-white hover:text-[#e65b56] bg-[#e65b56]">View Details</button></Link>

                    </td>
                </tr>
            ))}
        </tbody>
    );
};
AllCraftTable.propTypes = {
    items: PropTypes.node,
}
export default AllCraftTable;

