import Navbar from "../Navigation/Navbar";
import { useLocation } from "react-router-dom";

export default function MovieList() {
  const location = useLocation();
  const { list } = location.state

  return (
    <div>
      <Navbar />
      <h2>Movie List</h2>
      <div>{list}</div>
    </div>
  );
}
