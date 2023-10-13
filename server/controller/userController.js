const createUser = (userCollection) => async (req, res) => {
  const user = req.body;

  try {
    const newUser = await userCollection.insertOne(user);
    console.log(newUser.ops[0]);

    res.send(newUser.ops[0]);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Error creating user" });
  }
};

module.exports = {
  createUser,
};
