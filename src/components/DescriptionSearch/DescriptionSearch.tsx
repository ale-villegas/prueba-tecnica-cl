import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const DescriptionSearch = () => {
  const { searchResult, searchForm } = useSelector(
    (state: RootState) => state.posts
  );

  return (
    <>
      {searchResult && searchResult.length > 0 && (
        <h3>
          Search for posts by {searchForm.search} that contain these words :{" "}
          {searchForm.input}
        </h3>
      )}
    </>
  );
};

export default DescriptionSearch;
