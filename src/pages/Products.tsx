import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, BarChart3, MapPin, Network } from "lucide-react";
import { Link } from "react-router-dom";
const Products = () => {
  return <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">Supplier Risk</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-400">Welcome back</span>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">RM</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-slate-700">
          <button className="pb-3 px-1 border-b-2 border-red-500 text-red-500 font-medium">
            Privileged Analytics
          </button>
          <button className="pb-3 px-1 text-slate-400 hover:text-white transition-colors">
            Resource Smart
          </button>
          <button className="pb-3 px-1 text-slate-400 hover:text-white transition-colors">
            Data Privacy Policy
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Supply Chain Intelligence Map */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Supply Chain Intelligence Map
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Coming soon – visualize product flow & intelligence across your entire supply network
                </p>
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                Explore (soon)
              </Button>
            </div>
          </Card>

          {/* Geographic Tracking */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Geographic Tracking
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Coming soon – map your suppliers globally and track geographic risk distribution
                </p>
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                View Map (soon)
              </Button>
            </div>
          </Card>

          {/* Supplier Risk Assessment */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Supplier Risk Assessment
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Assess all supplier risk in one click with comprehensive analysis and reporting
                </p>
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link to="/risk-assessment">
                  Go to Risk Assessment
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          

          

          
        </div>
      </div>
    </div>;
};
export default Products;