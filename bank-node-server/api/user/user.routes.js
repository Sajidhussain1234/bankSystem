



const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

//Route:02 /Get single by /transaction/:Id 
router.get("/:id", controller.getUser);

//Route:01 /Create user
router.post("/", controller.createUser);


//Route:03 /Update user
router.put("/:id", controller.updateUser); 

//Route:03 /Delete user
router.delete("/:id", controller.deleteUser); 
 

module.exports = router;




// const { authJwt } = require("../middlewares");
// const controller = require("../controllers/user.controller");

// module.exports = (app) =>{
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.get("/api/test/all", controller.allAccess);

//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
// };
