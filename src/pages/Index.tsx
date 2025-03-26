
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <Link to="/prospect-form">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Prospect Form
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
