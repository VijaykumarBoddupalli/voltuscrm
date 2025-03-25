
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Shipping & Logistics CRM</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Manage your shipping company's prospects, contacts, and business intelligence with this comprehensive form system.
        </p>
        <div className="mt-8">
          <Link to="/prospect-form">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Open Prospect Form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
