import { connectDB } from "@/app/util/database";

export default async function project() {
  const db = (await connectDB).db("projectView");
  let result = await db.collection("detail").find().toArray();
  return <main>{result[0].title}</main>;
}
