import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma";
import Image from 'next/image';
import Link from "next/link";
import LogoutButton from "@/app/components/LogoutButton";

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return;
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });
    if (!currentUser) return;
    return currentUser;
  } catch (e: any) {
    // simply ignores if no user is logged in
    return;
  }
};
export default async function Home() {
  const user = await getCurrentUser();

  if (!user) 
    return (
      <>
        <h3>You are currently not logged in!</h3>
        <Link href="/login">Login to my account</Link>
      </>
    );

  return (
    <>
      <Image
        style={{ borderRadius: "50%" }}
        src={user.image || "/default.jpg"}
        width={100}
        height={100}
        alt="Profile Image"
      />
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <LogoutButton/>    </>
  );
}