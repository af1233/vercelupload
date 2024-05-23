import { useState ,useEffect} from "react";
import './FormData.css';
import axios from "axios";
import { Spin } from "antd";
import resData from "./ResData";
import TextBalloon from "./TextBalloon";
const CustomForm = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setData(e.target.value);
    setFile(null); // Reset file if text is being entered
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setData(''); // Reset text if file is being uploaded
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("data",data, file)
    // try {
    //   setLoading(true);
    //   let formData = new FormData();

    //   if (data) {
    //     formData.append("data", data);
    //   } else if (file) {
    //     formData.append("file", file);
    //   } else {
    //     setLoading(false);
    //     alert("Please enter text or select a file.");
    //     return;
    //   }
    //   console.log("data of both fields : ", data,file)
    //   const response = await axios.post("http://4.245.1.218:8080/api/post_data", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (response.data) {
    //     setResponseData(response.data);
    //     setLoading(false);
    //     setData('')
    //     setFile(null)
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setLoading(false);
    // }
  };
   useEffect(() => {
    setResponseData(resData)
   }, []) 
  return (
    <>
      <div className="maindiv">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <textarea className="textarea" onChange={handleTextChange}
              value={data} placeholder="Enter your text here..."/>
            <div style={{ padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <input accept=".html" type="file" onChange={handleFileChange} />
              <button className="submit-button" type="submit">Submit</button>
            </div>
          </form>
        </div>
        {loading ? (
          <Spin size="large" className="centerloading" />
        ) : (
            <div>
              {responseData.first_persone_image && (
                <TextBalloon text={responseData.first_evaluation} image={responseData.first_persone_image}/> 
              )}
              {responseData.second_persone_image && (
                <TextBalloon text={responseData.second_evaluation} image={responseData.second_persone_image}/> 
              )}
              {responseData.third_persona_image && (
                <TextBalloon text={responseData.third_evaluation} image={responseData.third_persona_image}/> 
              )}
              {responseData.fourth_persona_image && (
                <TextBalloon text={responseData.fourth_evaluation} image={responseData.fourth_persona_image}/> 
              )}
            </div>
          )
        }
      </div>
    </>
  );
};

export default CustomForm;
