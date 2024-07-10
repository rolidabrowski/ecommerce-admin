import { UserButton } from "./auth/user-button";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/auth/login");
  }

  const stores = await db.store.findMany({
    where: {
      userId: user.id,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
