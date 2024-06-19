import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateItem = ({ dark }) => {
    const { id } = useParams();
    const [updateItem, setUpdateItem] = useState({}); // Initialize as null to represent loading state

    useEffect(() => {
        fetch(`https://art-aura-server.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateItem(data);
            })
            .catch(error => {
                console.error('Error fetching update item:', error);
            });
    }, [id]);

    const handleUpdateItem = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const newItem = { name, subCategory, photo, description, price, rating, customization, processing, stock };
        console.log(newItem);

        fetch(`https://art-aura-server.vercel.app/updateItem/${id}`, {
            method : "PUT",
            headers : 
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0)
            {
                Swal.fire({
                    title: 'success!',
                    text: 'Item Updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'Proceed'
                })
                form.reset();
            }
        })
    }

    return (
        <div className={`${dark ? "bg-[#0F172A]" : ""} p-24`}>
            <h2 className="text-3xl text-[#e65b56] font-extrabold font-sedan py-5">Add Art & Craft Item</h2>
            <form onSubmit={handleUpdateItem}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={updateItem.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub_Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" defaultValue={updateItem.subCategory} placeholder="Sub_Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={updateItem.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={updateItem.description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={updateItem.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={updateItem.rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" defaultValue={updateItem.customization} placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing" defaultValue={updateItem.processing} placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stock" defaultValue={updateItem.stock} placeholder="Stock Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Update Item" className="btn w-full  bg-[#e65b56] hover:text-[#e65b56] text-white" />

            </form>
        </div>
    );
};
UpdateItem.propTypes = {
    dark: PropTypes.number,
}
export default UpdateItem;
