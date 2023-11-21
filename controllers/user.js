const { Op } = require("sequelize");
const {models : {
   user : userModel}, sequelize
} = require("../models/index");


const listUsers = async (req, res) => {
  try {
    // Fetch all user records from the database
    // let insert = await userModel.create({
    //     id:20,
    //     name:'bhavesh',
    //     salary:3000
    // })
    let result = await userModel.findAll({
        // attributes:['name','salary']
        // attributes:{
        //     include:[
        //         [sequelize.fn('CONCAT',sequelize.col('name'),'pata'),'fullname']
        //     ]
        // }
        attributes:['name','salary'],
        where:{
            id : {[Op.gte]:2}
        }
    });

    // Respond with the list of users
    res.status(200).json(result);
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = listUsers;
