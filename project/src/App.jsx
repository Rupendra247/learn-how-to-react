// import User from "./User";
// import Product from "./Product";

// const App = () => {
//   let name = "rupendra";
//   let sirname = "dhungana";

//   return (
//     <div>
//       <p>
//         hi my name {name} {sirname}
//       </p>
//       <p
//         style={{
//           backgroundColor: "green",
//         }}
//       >
//         the sum of two number is {1 + 1}
//       </p>
//       <img src="/image" alt="" />
//       <p className="success">this is success</p>
//       <p className="error">this error</p>

//       <User></User>
//       <Product></Product>
//     </div>
//   ); //back tick `` to call the value rather than the "" ' '
// };

// export default App;

import React from "react";
import SunwayLink from "./SunwayLink";
import SunwayRoute from "./SunwayRoute";

const App = () => {
  return (
    <div>
      <SunwayLink></SunwayLink>
      <SunwayRoute></SunwayRoute>
    </div>
  );
};

export default App;
