
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Globe, Users, Wifi } from "lucide-react";

const driverImpact = [
  { driver: 'Prior Revenue Performance', impact: 92, category: 'Historical' },
  { driver: 'Global GDP Growth', impact: 87, category: 'Economic' },
  { driver: 'Emerging Market Revenue/Capita', impact: 78, category: 'Market' },
  { driver: 'Internet Penetration', impact: 72, category: 'Infrastructure' },
  { driver: 'Education Index', impact: 65, category: 'Demographic' },
  { driver: 'Inflation Rate', impact: -58, category: 'Economic' },
];

const correlationData = [
  { metric: 'Broadband Penetration', correlation: 0.74, impactPer10: 2.3 },
  { metric: 'GDP per Capita', correlation: 0.69, impactPer10: 1.8 },
  { metric: 'Education Spending', correlation: 0.61, impactPer10: 1.5 },
  { metric: 'Digital Literacy', correlation: 0.58, impactPer10: 2.1 },
];

const scenarioImpact = [
  { scenario: 'Base Case', revenue: 211.9, probability: 45 },
  { scenario: 'High GDP Growth', revenue: 225.7, probability: 25 },
  { scenario: 'Digital Expansion', revenue: 218.4, probability: 20 },
  { scenario: 'Emerging Markets Boom', revenue: 232.1, probability: 10 },
];

const DriverAnalysis = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">Revenue Driver Impact Analysis</CardTitle>
          <CardDescription>Statistical significance and correlation strength of key factors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {driverImpact.map((item, index) => (
              <div key={item.driver} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">{item.driver}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.impact > 0 ? '+' : ''}{item.impact}%
                  </span>
                </div>
                <Progress 
                  value={Math.abs(item.impact)} 
                  className="h-2"
                  style={{
                    '--progress-background': item.impact > 0 ? '#10b981' : '#ef4444',
                  } as React.CSSProperties}
                />
                <div className="text-xs text-slate-500 capitalize">{item.category} Factor</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Infrastructure Correlation</CardTitle>
          <CardDescription>Digital infrastructure impact on revenue growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {correlationData.map((item, index) => (
              <div key={item.metric} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {index === 0 && <Wifi className="w-4 h-4 text-blue-600" />}
                    {index === 1 && <TrendingUp className="w-4 h-4 text-blue-600" />}
                    {index === 2 && <Users className="w-4 h-4 text-blue-600" />}
                    {index === 3 && <Globe className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-900">{item.metric}</div>
                    <div className="text-xs text-slate-500">+{item.impactPer10}% per 10% increase</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{(item.correlation * 100).toFixed(0)}%</div>
                  <div className="text-xs text-slate-500">Correlation</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Scenario Revenue Impact</CardTitle>
          <CardDescription>Projected outcomes under different market conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={scenarioImpact}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="scenario" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'revenue' ? `$${value}B` : `${value}%`,
                  name === 'revenue' ? 'Projected Revenue' : 'Probability'
                ]}
              />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {scenarioImpact.map((item) => (
              <div key={item.scenario} className="flex justify-between items-center text-sm">
                <span className="text-slate-600">{item.scenario}</span>
                <div className="text-right">
                  <div className="font-medium">${item.revenue}B</div>
                  <div className="text-xs text-slate-500">{item.probability}% probability</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverAnalysis;
