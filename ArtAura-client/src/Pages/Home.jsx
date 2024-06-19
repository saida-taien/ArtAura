
import AllSubCategory from "../Components/AllSubCategory";
import Banner from "../Components/Banner";
import CraftItemsSection from "../Components/CraftItemsSection";
import Gallery from "../Components/Gallery";
import { useLoaderData } from 'react-router-dom';
import Review from "../Components/Review";

const Home = () => {
    const items = useLoaderData();
    console.log(items)
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <CraftItemsSection></CraftItemsSection>
            <AllSubCategory></AllSubCategory>
            <Review></Review>

        </div>
    );
};

export default Home;