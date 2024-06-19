import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const SubCategory = ({dark}) => {
    const { subCategory } = useParams();
    console.log(subCategory);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://art-aura-server.vercel.app/categorySub/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [subCategory])
    console.log(items);
    return (
        <div>
            <h1 className="text-3xl font-bold font-sedan border-l-8 container mx-auto border-red-700 my-10 pl-5">{subCategory}</h1>
            {
                items.map(item => <section key={item._id} className={`${dark ? "bg-[#0F172A] text-white" : "bg-[#fae8d3]"}dark:text-gray-800 shadow-2xl my-5 container mx-auto`}>
                    <div className=" justify-around p-4 px-24 sm:py-8 lg:py-24  grid grid-cols-1 lg:grid-cols-10">
                        <div className="flex items-center lg:col-span-5 justify-center md:px-36 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src={item.photo} alt="" className="object-contain h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                        <div className="flex lg:col-span-5 flex-col justify-center md:pr-32 p-4 text-center rounded-sm ">
                            <h1 className="text-3xl font-sedan font-bold leading-none md:text-5xl text-center">{item?.name}
                            </h1>
                            <p>{item?.description}</p>
                            <div className=' py-4'>
                                <p><strong>Price</strong> : {item?.price}</p>
                                <p><strong>Sub Category</strong> : {item?.subCategory}</p>
                                <p className='flex gap-2 justify-center items-center'><IoMdStar />{item?.rating}</p>
                                <p><strong>Customization : </strong>{item?.customization}</p>
                                <p><strong>Processing Time : </strong>{item?.processing}</p>
                                <Link to={`/viewDetails/${item._id}`}><button className="btn border-0 text-white hover:text-black bg-[#e65b56]">View Details</button></Link>
                            </div>
                        </div>

                    </div>
                </section>)
            }
        </div>
    );
};
SubCategory.propTypes = {
    dark: PropTypes.number,
}
export default SubCategory;