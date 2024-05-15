"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
