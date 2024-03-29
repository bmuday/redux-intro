import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPictures } from "./feature/pictures.slice";

const App = () => {
  // const [picsData, setPicsData] = useState([]);
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPictures(res.data)));
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
