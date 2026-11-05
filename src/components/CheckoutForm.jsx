import { useState } from "react";

const MAHALLAHS = [
  "Ali",
  "Aminah",
  "Faruq",
  "Asiah",
  "Bilal",
  "Hafsa",
  "Uthman",
  "Zubair",
];

// A plain function: values in, errors object out. Empty object = valid.
function validate(values) {
  // empty box where we collect errors
  const errors = {}; //creating empty object. if ada error, then it will add key (cth: name) and value (cth: Enter your name (at least 3 characters).)
  if (values.name.trim().length < 3) {
    errors.name = "Enter your name (at least 3 characters).";
  }
  if (!values.mahallah) {
    errors.mahallah = "Please choose your mahallah.";
  }
  if (!values.pickupTime) {
    errors.pickupTime = "Please choose a pickup time.";
  } else if (values.pickupTime < "07:00" || values.pickupTime > "22:00") {
    errors.pickupTime = "Pickup time must be between 07:00 and 22:00.";
  }
  return errors;
}
//have error here bcs: temporary (object), collect validation result, used only by validate, no re render


function CheckoutForm({ onPlaceOrder }) { //component can give CheckoutFOrm a function
  const [values, setValues] = useState({
    name: "",
    mahallah: "",
    pickupTime: "", //these are all objects inside the values state. sent to validate function
  }); //then we can see it as values.name etc
  const [errors, setErrors] = useState({}); 
// ada another error state here bcs: a state, remember validation result, re render, display the error

  // both these are funcction within checkout form.
  // One handler for every input: the input's name matches a key in values.
  function handleChange(event) {
    const { name, value } = event.target; //name is which input berubah and value is what it entered
    setValues((prev) => ({ ...prev, [name]: value })); //dia letak const before this as prev and then update yg baru
  } //prev is react thing.

  //runs when form is submitted
  function handleSubmit(event) {
    event.preventDefault(); // stop the page reloading
    const found = validate(values);
    setErrors(found); //cause component to rerender and allow it to appear on screen
    if (Object.keys(found).length === 0) { //if ada error, dia akan kira []. if ada error +1, if none then 0
      onPlaceOrder(values);
    }
  }


  //part that actually appears on screen
  return (
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <h3>Checkout</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={values.name} 
        onChange={handleChange}
      />
      {errors.name && <p className="field-error">{errors.name}</p>}

      <label htmlFor="mahallah">Mahallah</label>
      <select
        id="mahallah"
        name="mahallah"
        value={values.mahallah}
        onChange={handleChange}
      >
        <option value="">Select…</option>
        {MAHALLAHS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      {errors.mahallah && <p className="field-error">{errors.mahallah}</p>}

      <label htmlFor="pickupTime">Pickup time</label>
      <input
        id="pickupTime"
        name="pickupTime"
        type="time"
        value={values.pickupTime}
        onChange={handleChange}
      />
      {errors.pickupTime && <p className="field-error">{errors.pickupTime}</p>}

      <button type="submit" className="btn">
        Place order
      </button>
    </form>
  );
}

export default CheckoutForm;
