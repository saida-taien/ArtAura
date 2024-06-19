import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllSubCategory = () => {
    const [subCategory, setSubCategory] = useState([]);
    useEffect(() => {
        fetch(`https://art-aura-server.vercel.app/subCategory`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubCategory(data);
            })
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl pt-10 pb-3 font-bold text-[#e65b56] font-sedan">Explore Pottery Perfection Across Subcategories</h1>
            </div>
            <p className="pb-3  text-center">Explore pottery`s spectrum: clay, stoneware, porcelain, terra cotta, ceramics & architectural, and home decor. <br /> Experience artisanal marvels, tradition meets modernity.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-20">
                {
                    subCategory.map(sub =>
                        <div key={sub._id} >
                            <Link to={`/allSub/${sub.subCategory}`}>
                                <div className="max-w-xs p-6 rounded-md shadow-2xl  dark:bg-gray-50 dark:text-gray-900">
                                    <img src={sub.photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="mt-6 mb-2">
                                        <span className="block text-[#e65b56] text-xs font-medium tracking-widest uppercase dark:text-violet-600">ArtAura</span>
                                        <h2 className="text-xl font-semibold tracking-wide">{sub.subCategory}</h2>
                                    </div>
                                    <p className="dark:text-gray-800">{sub.description}</p>
                                </div>
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllSubCategory;