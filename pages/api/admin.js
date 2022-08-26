import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { username, password } = data;

    const client = await connectToDatabase();
    const db = client.db();

    const user = await db.collection("users").findOne({ username: username });

    if (!user) {
      console.log("no such user");
      client.close();
      res.status(422).json({ message: "No such user" });
      return;
    }

    if (user.username === username && user.password === password) {
      client.close();
      res.status(200).json({ message: "Logged In" });
    } else {
      client.close();
      res.status(422).json({ message: "Wrong password" });
    }
  }
}

export default handler;
