const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("userDB_Another").collection("User");
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const newUser = await userCollection.insertOne(user);
        res.status(201).send(newUser);
      } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
      }
    });
    app.get("/users", async (req, res) => {
      try {
        const users = await userCollection.find().toArray();
        res.status(200).send(users);
      } catch (error) {
        console.log(error.message);
      }
    });
    app.delete("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        await userCollection.deleteOne(filter);
        res.send("user deleted successfully");
      } catch (error) {
        console.log(error.message);
      }
    });
    app.put("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const { name, email } = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateUser = {
          $set: {
            name,
            email,
          },
        };
        await userCollection.updateOne(filter, updateUser, options);
        res.send("user updated successfully");
      } catch (error) {
        console.log(error.message);
      }
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
