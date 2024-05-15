"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <h1>Profile</h1>;
};

export default Profile;
