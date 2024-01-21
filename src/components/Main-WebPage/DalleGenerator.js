// import React, { useState } from "react";
// import { ImageGenerator } from "./ImageGenerator";

// const DalleGenerator = () => {
//   const [prompt, setPrompt] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const imageData = await ImageGenerator(prompt);
//     setImage(imageData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//         />
//         <button type="submit">Generate</button>
//       </form>
//       {image && <img src={image} alt="Generated from DALL-E" />}
//     </div>
//   );
// };

// export default DalleGenerator;
