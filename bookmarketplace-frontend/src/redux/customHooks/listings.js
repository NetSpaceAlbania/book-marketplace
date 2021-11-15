import { useSelector } from "react-redux";

export const useListings = () => {
    const listings = useSelector((state) => state);
    return listings;
}