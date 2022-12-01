import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Card, CardContent } from "@mui/material";
import Basel from "../Images/Basel.png";
import Pineapple from "../Images/Pineapple.png";
import Pizza from "../Images/Pizza.png";
import Red from "../Images/Red.png";
import IceCompo from "./IceCompo";

function Pizzimg() {
  const [total, settotal] = useState([]);
  const [price] = useState({
    Icecream: 50,
    cone: 60,
    besal: 70,
    tomato: 80,
    pineapple: 90,
  });
  const [data, setData] = useState({
    Icecream: false,
    cone: false,
    besal: false,
    tomato: false,
    pineapple: false,
  });

  const [txt, setTxt] = useState("");
  const Navigate = useNavigate();

  const handeleorder = () => {
    localStorage.setItem("Orderdata", JSON.stringify(data));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("CustomerName", txt);
    Navigate("/conform");
  };

  const chengename = (name) => {
    let newdata = JSON.parse(JSON.stringify(data));
    newdata[name] = !newdata[name];
    setData(newdata);
    if (newdata[name]) {
      settotal([Number(...total) + Number(price[name])]);
    } else {
      settotal([Number(...total) - Number(price[name])]);
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sx={{ border: "2px solid black" }}>
          <div style={{ maxWidth: 500, position: "relative" }}>
            <motion.div
             className="Pizzaclass"
             animate={{
               x: data["pineapple"] ? 0 : -500,
               y: 0,
               scale: 1,
               rotate: 0,
              }}
              >
              <img
                src={Pineapple}
                alt="Pineapple img"
                style={{ zIndex: 2, left: "20px" }}
                height="100%"
                width="100%"
                />
            </motion.div>

            <motion.div
                className="Pizzaclass"
              animate={{
                x: data["tomato"] ? 0 : -500,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
            >
              <img
                src={Red}
                alt="Tomato img"
                style={{ zIndex: 4, left: "20px" }}
                height="100%"
                width="100%"
              />
            </motion.div>

            <motion.div
              className="Pizzaclass"
              animate={{
                x: data["besal"] ? 0: -500,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
            >
              <img
                src={Basel}
                alt=""
                style={{ zIndex: 3 }}
                height="100%"
                width="100%"
              />
            </motion.div>

            <img
              src={Pizza}
              alt=""
              style={{ zIndex: 1 }}
              height="100%"
              width="100%"
              
            />
          </div>
        </Grid>

        <Grid item xs={6} sx={{ border: "2px solid black" }}>
          <input
            type="search"
            style={{ flex: "flex" }}
            placeholder="Customer_Name"
            onChange={(e) => setTxt(e.target.value)}
            className="Customer_Name"
          />
          <br />
          <input type="checkbox" onChange={() => chengename("pineapple")} />
          <label>pineapple</label> <b>Rs:-{price.pineapple}</b>
          <br />
          <input type="checkbox" onChange={() => chengename("besal")} />
          <label>besal</label> <b>Rs:-{price.besal}</b>
          <br />
          <input type="checkbox" onChange={() => chengename("tomato")} />
          <label>tomato</label> <b>Rs:-{price.tomato}</b>
          <br />
          <b>Cold Item</b>
          <br />
          <input type="checkbox" onChange={() => chengename("Icecream")} />
          <label>Icecream</label> <b>Rs:-{price.Icecream}</b>
          <br />
          <input type="checkbox" onChange={() => chengename("cone")} />
          <label>cone</label> <b>Rs:-{price.cone}</b>
          <br />
          <b className="b">Total Price:- {total}</b>
          <Button
            fullWidth
            onClick={() => handeleorder()}
            variant="contained"
            color="success"
          >
            Order
          </Button>
          <IceCompo key="icecompo" data={data} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Pizzimg;
