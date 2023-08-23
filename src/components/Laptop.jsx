import { useSelector } from "react-redux";
import AddLaptop from "./AddLaptop";

function Laptop() {
  const laptops = useSelector((store) => store.laptopSlice);


  return (
    <>
    <AddLaptop />
      <div className="products--container">
        {laptops.map((aLaptop) => (
          <div key={aLaptop.id} className="child--container">
            <h1>${aLaptop.price}</h1>
            <ul>
              <li>{aLaptop.spec.cpu}</li>
              <li>{aLaptop.spec.ram}</li>
              <li>{aLaptop.spec.HDD}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Laptop;
