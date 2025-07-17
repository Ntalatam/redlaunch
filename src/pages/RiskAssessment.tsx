import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, FileText, Search, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const RiskAssessment = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/products">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">SUPPLIER RISK ASSESSMENT</h1>
            <p className="text-slate-400 text-lg">COMPREHENSIVE RISK EVALUATION & MANAGEMENT SYSTEM</p>
          </div>
          <div className="ml-auto">
            <Button variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
              <Clock className="w-4 h-4 mr-2" />
              Audit Log
            </Button>
          </div>
        </div>

        {/* Risk Level Badges */}
        <div className="flex space-x-4 mb-8">
          <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium">
            Low Risk
          </span>
          <span className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium">
            Medium Risk
          </span>
          <span className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium">
            High Risk
          </span>
          <span className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
            Critical Risk
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Risk Calculation Methodology */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <h2 className="text-xl font-bold">RISK CALCULATION METHODOLOGY</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-slate-300">Manufacturer: +1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-slate-300">Distributor: +2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-slate-300">Service Provider: +3</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-slate-300">Updated in last 7 days: +2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-slate-300">Name contains "test": +1</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 italic mb-6">
              (Total: 0-3 = Low, 3-4 = Medium, 5-6 = High, 7+ = Critical. The military may use their own formula)
            </p>

            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              EXPORT PDF
            </Button>
          </Card>

          {/* Add New Supplier */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
              <h2 className="text-xl font-bold">ADD NEW SUPPLIER</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Supplier Name:
                </label>
                <Input 
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Enter supplier name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Supplier Type:
                </label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Manufacturer" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="service-provider">Service Provider</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  CMMC Level:
                </label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select CMMC Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="level-1">Level 1</SelectItem>
                    <SelectItem value="level-2">Level 2</SelectItem>
                    <SelectItem value="level-3">Level 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  NIST 800-171 Compliant:
                </label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select NIST 800-171 Compliance" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                    <SelectItem value="partial">Partial Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  DFARS Compliant:
                </label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select DFARS Compliance" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  ITAR Compliant:
                </label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select ITAR Compliance" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                SUBMIT ASSESSMENT
              </Button>
            </div>
          </Card>
        </div>

        {/* Supplier List */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold">SUPPLIER LIST</h2>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                className="bg-slate-700 border-slate-600 text-white pl-10"
                placeholder="Search by name..."
              />
            </div>
            <Select>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="manufacturer">Manufacturer</SelectItem>
                <SelectItem value="distributor">Distributor</SelectItem>
                <SelectItem value="service-provider">Service Provider</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
              Clear
            </Button>
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No suppliers found.</h3>
            <p className="text-slate-400">Try adjusting your filters or search.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RiskAssessment;