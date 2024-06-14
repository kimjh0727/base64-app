import React, { useState } from "react";
import axios from "axios";

const EncodeDecode: React.FC = () => {
  const [textToEncode, setTextToEncode] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [textToDecode, setTextToDecode] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const encodeText = async () => {
    try {
      const response = await axios.post("http://localhost:3000/encode", {
        text: textToEncode,
      });
      setEncodedText(response.data.encoded);
    } catch (error) {
      console.error("Error encoding text:", error);
    }
  };

  const decodeText = async () => {
    try {
      const response = await axios.post("http://localhost:3000/decode", {
        encoded: textToDecode,
      });
      setDecodedText(response.data.decoded);
    } catch (error) {
      console.error("Error decoding text:", error);
    }
  };

  return (
    <div>
      <h1>Base64 Encoder/Decoder</h1>
      <div>
        <h2>Encode</h2>
        <input
          value={textToEncode}
          onChange={(e) => setTextToEncode(e.target.value)}
          placeholder="Enter text to encode"
        />
        <button onClick={encodeText}>Encode</button>
        <p>Encoded: {encodedText}</p>
      </div>
      <div>
        <h2>Decode</h2>
        <input
          value={textToDecode}
          onChange={(e) => setTextToDecode(e.target.value)}
          placeholder="Enter text to decode"
        />
        <button onClick={decodeText}>Decode</button>
        <p>Decoded: {decodedText}</p>
      </div>
    </div>
  );
};

export default EncodeDecode;
