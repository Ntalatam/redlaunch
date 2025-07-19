import { Card } from "@/components/ui/card";
import { Target, MapPin, BarChart3 } from "lucide-react";
const Products = () => {
  return <div className="min-h-screen flex items-end justify-center p-6 bg-stone-800">
      <div className="container max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Supplier Risk Assessment */}
          <Card className="border-slate-600 p-8 rounded-xl bg-stone-900">
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
                
              </div>
            </div>
          </Card>

          {/* Geographical Tracker */}
          <Card className="border-slate-600 p-8 rounded-xl bg-stone-900">
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
                
              </div>
            </div>
          </Card>

          {/* Supplier Risk Visualization */}
          <Card className="border-slate-600 p-8 rounded-xl bg-stone-900">
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
                
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};
export default Products;