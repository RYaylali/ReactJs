import { useState } from "react";
function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault(); //preventDefault event sayfa yenilenin verinin kaybolmasını engeller.Eğer even props ile bu işlem yapılmaz ise sayfa yenilenir ve veri kaybolur
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
