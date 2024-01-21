// import React, { useRef, useState } from "react";
// import default_image from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\assets\\speaker.svg";
// // import OpenAI from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\node_modules\\openai";
// // import OpenAI from
// const ImageGenerator = () => {
//   //   const openai = new OpenAI();
//   //   console.log(openai);
//   const [image_url, setImage_url] = useState("/");
//   let inputRef = useRef(null);

//   const ImageGenerator = async () => {
//     if (inputRef.current.value === "") {
//       return 0;
//     }
//     const response = await fetch(
//       "https://platform.openai.com/v1/images/generation",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer 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",
//           "User-Agent": "Chrome",
//         },
//         body: JSON.stringify({
//           prompt: `${inputRef.current.value}`,
//           n: 1,
//           size: "512x512",
//         }),
//       }
//     );
//     let data = await response.json();
//     console.log(data);
//   };

//   return (
//     <div>
//       <div className="img-loading">
//         <div className="image">
//           <img src={image_url === "/" ? default_image : image_url} alt="" />
//         </div>
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="descipe image"
//             ref={inputRef}
//           />
//           <div
//             className="generate-btn"
//             onClick={() => {
//               ImageGenerator();
//             }}
//           >
//             {" "}
//             Generate
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGenerator;
