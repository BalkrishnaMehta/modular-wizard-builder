
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">mendi</h1>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </header>

      <main className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Welcome to Mendi</h2>
        <p className="text-lg mb-8">Your seamless repair and tailoring service</p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <Button className="bg-app-blue hover:bg-blue-600">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
