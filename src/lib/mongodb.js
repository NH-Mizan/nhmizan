import { MongoClient } from "mongodb";

const dbName = process.env.MONGODB_DB || "nhmizan_portfolio";
let clientPromise;

function getClientPromise() {
  if (clientPromise) return clientPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI environment variable.");

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });
  clientPromise = client.connect();
  return clientPromise;
}

export async function getDatabase() {
  const connectedClient = await getClientPromise();
  return connectedClient.db(dbName);
}
