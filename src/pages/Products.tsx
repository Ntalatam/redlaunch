import { Card } from "@/components/ui/card";
import { Target, MapPin, BarChart3 } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Supplier Risk Assessment */}
          <Card className="bg-slate-700/50 border-slate-600 p-8 rounded-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 border-4 border-red-500 rounded-full"></div>
                <div className="absolute inset-2 border-2 border-red-500 rounded-full"></div>
                <div className="absolute inset-4 bg-red-500 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Supplier Risk Assessment
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Assess, monitor, and mitigate supplier risks with real-time analytics, scoring, and audit trails. The Supplier Risk Assessment helps you identify vulnerabilities, ensure compliance, and protect your supply chain from emerging threats.
                </p>
              </div>
            </div>
          </Card>

          {/* Geographical Tracker */}
          <Card className="bg-slate-700/50 border-slate-600 p-8 rounded-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-red-500 rounded-xl flex items-center justify-center relative">
                <MapPin className="w-10 h-10 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Geographical Tracker
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Visualize and analyze hazard zones, risk clusters, and supply chain vulnerabilities. Geographical tracker provides a geographic overview of potential disruptions and helps you plan for resilience.
                </p>
              </div>
            </div>
          </Card>

          {/* Supplier Risk Visualization */}
          <Card className="bg-slate-700/50 border-slate-600 p-8 rounded-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-red-500 rounded-xl flex items-center justify-center">
                <div className="flex items-end space-x-1">
                  <div className="w-2 h-6 bg-white rounded-sm"></div>
                  <div className="w-2 h-8 bg-white rounded-sm"></div>
                  <div className="w-2 h-4 bg-white rounded-sm"></div>
                  <div className="w-2 h-10 bg-white rounded-sm"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Supplier Risk Visualization
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Gain actionable insights into supplier risk trends, performance, and compliance. Supplier Risk Visualization turns complex data into clear, interactive charts for smarter decision-making.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Products;