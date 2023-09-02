import axios from "axios";
import { API } from "../global";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Item from "./Item";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function HomePage() {
  const [itemData, setItemData] = useState([]);
  const dispatch = useDispatch();
  const { cartItems, loading } = useSelector((state) => state.rootReducer);

  axios
    .get(`${API}/items/get-items`)
    .then((res) => {
      dispatch({ type: "hideLoading" });
      setItemData(res.data);
    })
    .catch((err) => {
      dispatch({ type: "hideLoading" });
      console.log(err);
    });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "30px",
      }}
    >
      HomePage
      <button type="button" class="btn btn-primary position-relative">
        Cart
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
      {/* <div>
        <b>
          <p>1</p>
        </b>
        <span style={{ marginLeft: "10px" }}>Cart</span>
      </div> */}
      {itemData.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
