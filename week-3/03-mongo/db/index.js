const mongoose = require("mongoose");

// Connect to MongoDB
const dbConnection = () => {
  mongoose
    .connect("")
    .then(() => {
      console.log("db connected successfully.");
    })
    .catch((err) => {
      console.log("error while connecting db", err);
    });
};

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  dbConnection,
};
