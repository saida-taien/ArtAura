import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MyArtAndCraftList = ({ dark }) => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(null); 

    useEffect(() => {
        fetch(`https://art-aura-server.vercel.app/myItem/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [user])

    
    const handleFilter = (e) => {
        const selectedOption = e.target.value;
        setFilter(selectedOption);
    }

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://art-aura-server.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = items.filter(cof => cof._id !== id);
                            setItems(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="container mx-auto">
                {/* Dropdown menu for filtering */}
                <select onChange={handleFilter} className=" shadow menu dropdown-content z-[1] rounded-box m-4 p-5 px-8 border  text-lg border-[#e65b56]  bg-transparent">
                    <option className="text-[#e65b56]"   value="">Filter by Customization</option>
                    <option className="text-[#e65b56]" value="Yes">Customizable</option>
                    <option className="text-[#e65b56]" value="No">Non-Customizable</option>
                </select>
            </div>

            {items?.filter(item => !filter || item.customization === filter).map(item =>
                <section key={item._id} className={`${dark ? "bg-[#0F172A] text-white" : "bg-[#fae8d3]"}dark:text-gray-800 shadow-2xl my-5 container mx-auto`}>
                    <div className="flex flex-col justify-around p-4 px-24 sm:py-8 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex items-center justify-center md:px-36 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src={item.photo} alt="" className="object-contain h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                        <div className="flex flex-col justify-center md:pr-32 p-4 text-center rounded-sm ">
                            <h1 className="text-3xl font-sedan font-bold leading-none md:text-5xl text-center">{item?.name}
                            </h1>
                            <div className=' py-4'>
                                <p><strong>Price</strong> : {item?.price}</p>
                                <p className='flex gap-2 justify-center items-center'><IoMdStar />{item?.rating}</p>
                                <p><strong>Customization : </strong>{item?.customization}</p>
                                <p><strong>Stock Status : </strong>{item?.stock}</p>
                            </div>


                            <div className="flex flex-col space-y-4  items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
                                <Link to={`/updateItemRoute/${item._id}`}><button className="btn btn-block  bg-[#e65b56] text-white mr-3 hover:text-black">Update</button></Link>
                                <Link><button onClick={() => handleDelete(item._id)} className="btn w-full bg-[#e65b56] text-white mr-3 hover:text-black">Delete</button></Link>
                            </div>
                        </div>

                    </div>
                </section>
            )}
        </div>
    );
};

MyArtAndCraftList.propTypes = {
    dark: PropTypes.number,
}

export default MyArtAndCraftList;
