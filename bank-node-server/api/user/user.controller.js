const User = require('./user.model'); 

// GET request to retrieve a user's information
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST request to create a new user
const createUser = async (req, res) => {
  const { firstName, lastName, mobileNumber } = req.body;
  const user = new User({
    firstName,
    lastName,
    mobileNumber
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT request to update an existing user's information
const updateUser = async (req, res) => {
  const { firstName, lastName, mobileNumber } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.mobileNumber = mobileNumber;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE request to remove a user from the system
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
