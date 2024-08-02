import React from "react";
import { Button, Table } from "reactstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";

export default function Cart() {
    const dispatch=useDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    const handle_delete=(x)=>{
      dispatch(deleteFromCart(x))
    }
  return (
    <>
      <Header/>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index)=>(
                    <tr key={index}>
                    <td >{item.id}</td>
                    <td>{item.name}</td>
                    {/* <td><Button onClick={()=>updateById(item.id,0)}>-</Button><span>{item.quantity}</span>
                    <Button onClick={()=>updateById(item.id,1)}>+</Button></td> */}
                    <td><Button className="btn btn-danger" onClick={()=>handle_delete(item.id)}>Delete</Button></td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
      <Footer/>
    </>
  );
}
