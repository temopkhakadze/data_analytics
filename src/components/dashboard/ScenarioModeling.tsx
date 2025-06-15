
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Calculator, TrendingUp, AlertTriangle, Target } from "lucide-react";

const ScenarioModeling = () => {
  const [gdpGrowth, setGdpGrowth] = useState([2.8]);
  const [internetPenetration, setInternetPenetration] = useState([75]);
  const [inflationRate, setInflationRate] = useState([3.7]);
  const [selectedRegion, setSelectedRegion] = useState("global");

  // Calculate projected revenue based on inputs
  const calculateProjectedRevenue = () => {
    const baseRevenue = 211.9;
    const gdpImpact = (gdpGrowth[0] - 3.2) * 2.1; // 2.1% impact per GDP growth point
    const internetImpact = (internetPenetration[0] - 75) * 0.23; // 0.23% per penetration point
    const inflationImpact = (inflationRate[0] - 4.1) * -0.8; // -0.8% per inflation point
    
    return baseRevenue + gdpImpact + internetImpact + inflationImpact;
  };

  const projectedRevenue = calculateProjectedRevenue();
  const revenue2026 = projectedRevenue * 1.16;
  const revenueChange = ((revenue2026 - 211.9) / 211.9) * 100;
  
  // const revenueChange = ((projectedRevenue - 211.9) / 211.9) * 100;

  const forecastData = [
    { year: '2023', actual: 211.9, projected: 211.9 },
    { year: '2024', actual: 245.0, projected: 245.0 },
    { year: '2025', actual: null, projected: 245.0 * 1.08 },
    { year: '2026', actual: null, projected: 245.0 * 1.16 },
    { year: '2027', actual: null, projected: 245.0 * 1.25 },
  ];

  const riskFactors = [
    { 
      factor: 'Geopolitical Tension', 
      probability: 35, 
      impact: -8.2,
      severity: 'high'
    },
    { 
      factor: 'Currency Fluctuation', 
      probability: 60, 
      impact: -3.1,
      severity: 'medium'
    },
    { 
      factor: 'Regulatory Changes', 
      probability: 25, 
      impact: -5.7,
      severity: 'medium'
    },
    { 
      factor: 'Economic Recession', 
      probability: 20, 
      impact: -12.4,
      severity: 'high'
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-600" />
            Interactive Scenario Modeling
          </CardTitle>
          <CardDescription>
            Adjust key parameters to model revenue projections under different market conditions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">Global GDP Growth (%)</label>
              <Slider
                value={gdpGrowth}
                onValueChange={setGdpGrowth}
                max={8}
                min={-2}
                step={0.1}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600">{gdpGrowth[0].toFixed(1)}%</div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">Internet Penetration (%)</label>
              <Slider
                value={internetPenetration}
                onValueChange={setInternetPenetration}
                max={95}
                min={50}
                step={1}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600">{internetPenetration[0]}%</div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">Inflation Rate (%)</label>
              <Slider
                value={inflationRate}
                onValueChange={setInflationRate}
                max={12}
                min={1}
                step={0.1}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600">{inflationRate[0].toFixed(1)}%</div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">Focus Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                  <SelectItem value="emerging">Emerging Markets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Target className="w-4 h-4 mr-2" />
                Generate Full Report
              </Button>
            </div>
          </div> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Revenue Projection</CardTitle>
          <CardDescription>5-year forecast based on current parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  ${revenue2026.toFixed(1)}B
                </div>
                <div className="text-sm text-slate-600">Projected FY2026 Revenue</div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-semibold ${revenueChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {revenueChange >= 0 ? '+' : ''}{revenueChange.toFixed(1)}%
                </div>
                <div className="text-sm text-slate-600">vs. FY2023</div>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value) => {
                  if (typeof value === 'number') {
                    return [`$${value.toFixed(1)}B`, 'Revenue'];
                  }
                  return [value, 'Revenue'];
                }}
              />
              <Area 
                type="monotone" 
                dataKey="projected" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                fill="url(#projectedGradient)" 
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
            Risk Assessment
          </CardTitle>
          <CardDescription>Potential challenges and their projected impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskFactors.map((risk, index) => (
              <div key={risk.factor} className="p-3 border border-slate-200 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm text-slate-900">{risk.factor}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    risk.severity === 'high' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {risk.severity}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Probability: {risk.probability}%</span>
                  <span className="text-slate-600">Impact: {risk.impact}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      risk.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${risk.probability}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScenarioModeling;
