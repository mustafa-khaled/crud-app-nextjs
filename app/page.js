import { getItems } from "./_lib/data-service";
import HomeTable from "./_components/HomeTable";

export default async function Home() {
  const usersData = await getItems();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="my-[20px]">Home Page</h1>
      <HomeTable usersData={usersData} />
    </div>
  );
}
