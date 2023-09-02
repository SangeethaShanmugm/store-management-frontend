import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "antd";
const { Meta } = Card;

function Item({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("add To Cart");
    const payload = dispatch({
      type: "addToCart",
      payload: { ...item, quantity: 1 },
    });
    console.log(payload);
  };
  return (
    <Card
      hoverable
      style={{
        width: 240,
        marginTop: "80px",
      }}
      cover={<img alt="example" src={item.image} />}
    >
      <Meta title={item.name} />
      <h4>Price: {item.price} ₹/-</h4>
      <Button type="primary" onClick={() => addToCart()}>
        Add Cart
      </Button>
    </Card>
  );
}

export default Item;
