import React, {useState } from "react";
import { shorturl } from "./data";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Button} from "@material-ui/core";
import style from "./App.module.css";
import copy from "copy-to-clipboard";


const App = ({value }) => {
  const [url, setUrl] = useState([]);
  const [result, setResult] = useState([]);

  const getUrl = async () => {
    try {
      if (url.length === 0) {
        return alert("Please enter the url");
      }
      const getResult = await shorturl(url);
      console.log(url);
      setResult([getResult]);
      setUrl("");
   
    
    } catch (error) {
      console.log(error);
    }
  };

  const copiedData= () => {
    copy(result[0].result_url); 
    alert("Successfully copied shorten link: " + result[0].result_url);
  };

  return (
    <div >
      <h1 className={style.container}>Paste a link to shorten it</h1>
      <div className="inputContainer">
        <input  className={style.inputfield}
          type="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Original URL....."
        />
      <Button className={style.btn} onClick={getUrl}>shorten </Button>
    
      </div>
      <br/>
      {
      result.length > 0 && result[0].result_url ? (
        <div className={style.main} onClick={copiedData}>
          <h2 className={style.link}>
              {result.length > 0 && result[0].result_url ? result[0].result_url : null}
              <FileCopyIcon fontSize="medium" className={style.copy}/>
          </h2>
  
        </div>
      ) : null}
    </div>
  );
};

export default App;

