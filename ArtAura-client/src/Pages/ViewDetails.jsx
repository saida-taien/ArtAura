import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const ViewDetails = ({dark}) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://art-aura-server.vercel.app/detailsItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching item details:', error);
            });
    }, [id]);

    return (
        <div>
            {item && (
                <section key={item._id} className={`${dark ? "bg-[#0F172A] text-white" : "bg-[#fae8d3]"}dark:text-gray-800 shadow-2xl my-5 container mx-auto`}>
                <div className=" grid grid-cols-10 p-4 px-24 sm:py-8 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="col-span-6  p-4 rounded-sm space-y-4">
                        <h1 className="text-3xl font-sedan font-bold leading-none md:text-5xl ">{item?.name}
                        </h1>
                        <p>{item.description}</p>
                        <div className=' py-4'>
                            <p><strong>Price</strong> : {item?.price}</p>
                            <p className='flex gap-2 '><strong>Rating : </strong>{item?.rating}<IoMdStar /></p>
                            <p><strong>Customization : </strong>{item?.customization}</p>
                            <p><strong>Processing : </strong>{item?.processing} days</p>
                            <p><strong>Stock Status : </strong>{item?.stock}</p>
                            <p><strong>Sub Category : </strong>{item?.subCategory}</p>
                            <p><strong>User Email : </strong>{item?.email}</p>
                            <p><strong>User Name : </strong>{item?.name}</p>
                        </div>
                    </div>
                    <div className="col-span-4 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={item.photo} alt="" className="object-contain h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            )}
        </div>
    );
};
ViewDetails.propTypes = {
    dark: PropTypes.number,
}
export default ViewDetails;
