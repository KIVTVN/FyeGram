import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Upload = () => {
  //the photo the user uploads
  const [photo, setPhoto] = useState(null);
  //error message that appears if the file type is not valid
  const [errorMess, setErrorMess] = useState("");
  //array of file types allowed to be uploaded
  const types = ["image/png, image/jpeg"];

  const handleChange = (e) => {
    let newPhoto = e.target.files[0];

    if (newPhoto && types.includes(newPhoto.type)) {
      setPhoto(newPhoto);
      setErrorMess("");
    } else {
      setPhoto(null);
      setErrorMess("Please select an image (png, jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div>
        {errorMess && <div className="error">{errorMess}</div>}
        {photo && <div>{photo}</div>}
        {photo && <ProgressBar photo={photo} setPhoto={setPhoto} />}
      </div>
    </form>
  );
};

export default Upload;
