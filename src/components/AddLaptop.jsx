import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_LAPTOP } from "../store/reducers/laptopSlice";

function AddLaptop() {

    const dispatchLaptop = useDispatch()


function onSubmit(e){
    if(specs.id === null || specs.price === ""){
        window.alert("must be filled all fields")
    }else{
        e.preventDefault()
        dispatchLaptop(ADD_LAPTOP(specs))
    }

}

  const [specs, setSpecs] = useState({
    price:"",
    spec:{
        cpu: "",
        ram: "",
        HDD: ""
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "cpu" || name === "ram" || name === "HDD") {
      setSpecs((prevSpecs) => ({
        ...prevSpecs,
        spec: {
          ...prevSpecs.spec,
          [name]: value,
        },
      }));
    } else {
      setSpecs((prevSpecs) => ({
        ...prevSpecs,
        [name]: value,
      }));
    }
  }
  

  return (
    <>
    <h1 style={{textAlign:'center'}}>Add Laptop</h1>
    <form
      style={{
        width:'50%',
        margin:"1em auto", 
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
      }}
    >
      <label htmlFor="price">Price</label>
      <input type="text" name="price" id="price"  onChange={(e) => handleChange(e)}  />

      <label htmlFor="cpu">CPU</label>
      <select name="cpu" id="cpu" value={specs.cpu} onChange={(e) => handleChange(e)}>
        <option  value="i3">i3</option>
        <option value="i5">i5</option>
        <option value="i7">i7</option>
        <option value="i9">i9</option>
        <option value="Rizen 5">Rizen 5</option>
      </select>

      <label htmlFor="ram">RAM</label>
      <select name="ram" id="ram" value={specs.ram} onChange={(e) => handleChange(e)}>
        <option value="4GB">4GB</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
      </select>

      <label htmlFor="hdd">HDD</label>
      <select name="HDD" id="hdd" value={specs.HDD} onChange={(e) => handleChange(e)}>
        <option value="500GB">500GB</option>
        <option value="1TB">1TB</option>
        <option value="2Tb">2TB</option>
      </select>

      <input 
      type="submit" 
      onClick={onSubmit}
      style={{marginTop:"1em", width:"30%" , margin:"1em auto", backgroundColor:'hotpink'}}
       />
    </form>
    </>
  );
}

export default AddLaptop;
