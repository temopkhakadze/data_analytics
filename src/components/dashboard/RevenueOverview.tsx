
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const revenueData = [
  { year: '2019', revenue: 125.8, growth: 13.2 },
  { year: '2020', revenue: 143.0, growth: 13.7 },
  { year: '2021', revenue: 168.1, growth: 17.5 },
  { year: '2022', revenue: 198.3, growth: 18.0 },
  { year: '2023', revenue: 211.9, growth: 6.9 },
];

const segmentData = [
  { segment: 'Productivity & Business', revenue: 69.3, percentage: 32.7 },
  { segment: 'Intelligent Cloud', revenue: 87.9, percentage: 41.5 },
  { segment: 'Windows & Devices', revenue: 54.7, percentage: 25.8 },
];

const RevenueOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">Revenue Trajectory & Growth Analysis</CardTitle>
          <CardDescription>Historical revenue performance demonstrating sustained momentum</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'revenue' ? `$${value}B` : `${value}%`,
                  name === 'revenue' ? 'Revenue' : 'Growth Rate'
                ]}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fill="url(#revenueGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Business Segment Performance</CardTitle>
          <CardDescription>Revenue distribution across key business units</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={segmentData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="segment" type="category" width={120} stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value) => [`$${value}B`, 'Revenue']}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Strategic Growth Insights</CardTitle>
          <CardDescription>Key performance indicators and momentum factors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-slate-700">Prior Revenue Momentum</span>
            <span className="text-lg font-bold text-blue-600">92% Correlation</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
            <span className="text-sm font-medium text-slate-700">Global GDP Alignment</span>
            <span className="text-lg font-bold text-emerald-600">87% Correlation</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
            <span className="text-sm font-medium text-slate-700">Emerging Market Efficiency</span>
            <span className="text-lg font-bold text-purple-600">3.2x Average</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
            <span className="text-sm font-medium text-slate-700">Digital Infrastructure Impact</span>
            <span className="text-lg font-bold text-orange-600">2-3% Per 10%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueOverview;
