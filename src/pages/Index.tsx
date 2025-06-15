
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import GlobalMarkets from "@/components/dashboard/GlobalMarkets";
import DriverAnalysis from "@/components/dashboard/DriverAnalysis";
import ScenarioModeling from "@/components/dashboard/ScenarioModeling";
import AnalysisContent from "@/components/analysis/AnalysisContent";
import { TrendingUp, Globe, Brain, Target, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Microsoft Global Revenue Analytics</h1>
              <h2 className="text-xl font-semibold text-slate-800">How Macroeconomic and Demographic Variables Affect Microsoft's Global Revenue</h2>
              <p className="text-slate-600 mt-1">Executive Analysis Dashboard - FY2023 Strategic Insights</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">$211.9B</div>
              <div className="text-sm text-slate-500">Total Revenue FY2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Revenue Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+7.2%</div>
              <p className="text-xs text-blue-100">vs. Previous Year</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-100">Global Markets</CardTitle>
              <Globe className="h-4 w-4 text-emerald-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">190+</div>
              <p className="text-xs text-emerald-100">Countries Served</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">AI Revenue Impact</CardTitle>
              <Brain className="h-4 w-4 text-purple-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15%</div>
              <p className="text-xs text-purple-100">Copilot Contribution</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Market Efficiency</CardTitle>
              <Target className="h-4 w-4 text-orange-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-orange-100">Revenue per GDP Point</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-slate-200 rounded-lg p-1">
            <TabsTrigger value="analysis" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Analysis Report
            </TabsTrigger>
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Revenue Overview
            </TabsTrigger>
            <TabsTrigger value="markets" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Global Markets
            </TabsTrigger>
            <TabsTrigger value="drivers" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Key Drivers
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Scenario Modeling
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="space-y-6">
            <AnalysisContent />
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <RevenueOverview />
          </TabsContent>

          <TabsContent value="markets" className="space-y-6">
            <GlobalMarkets />
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6">
            <DriverAnalysis />
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <ScenarioModeling />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
