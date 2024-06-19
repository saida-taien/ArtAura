
import { useLoaderData } from 'react-router-dom';
import AllCraftTable from '../Components/AllCraftTable';

const AllArtAndCraftItems = () => {
    const items = useLoaderData();

    console.log(items);

    return (
        <div className='grid grid-cols-1  gap-4 my-10 container mx-auto p-3'>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className=" text-5xl font-semibold leading-tight font-sedan border-0 border-l-8 pl-5 mb-10 border-[#e65b56]">All art & Craft</h2>
                <div className="overflow-x-auto">
                    <table className=" text-2xl">
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Rating</th>
                                <th className="p-3">Customizable</th>
                                <th className="p-3">Processing</th>
                                <th className="p-3 text-right">Stock</th>
                                <th className="p-3">Price</th>
                            </tr>
                        </thead>
                        <AllCraftTable items={items} />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;






{/* <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Invoice #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>
</div> */}