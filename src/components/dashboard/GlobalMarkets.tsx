
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, PieChart, Pie, Cell } from 'recharts';

const regionalData = [
  { region: 'North America', revenue: 106.5, growth: 8.2, countries: 3 },
  { region: 'Europe', revenue: 63.4, growth: 6.1, countries: 45 },
  { region: 'Asia Pacific', revenue: 31.8, growth: 12.4, countries: 25 },
  { region: 'Latin America', revenue: 7.1, growth: 15.2, countries: 20 },
  { region: 'Middle East & Africa', revenue: 3.1, growth: 18.7, countries: 97 },
];

const emergingMarkets = [
  { country: 'Georgia', revenuePerCapita: 45.2, gdpPerCapita: 4800, internetPenetration: 76 },
  { country: 'Poland', revenuePerCapita: 38.7, gdpPerCapita: 15200, internetPenetration: 84 },
  { country: 'Estonia', revenuePerCapita: 52.1, gdpPerCapita: 23400, internetPenetration: 91 },
  { country: 'Latvia', revenuePerCapita: 41.3, gdpPerCapita: 17800, internetPenetration: 88 },
  { country: 'Lithuania', revenuePerCapita: 44.6, gdpPerCapita: 19100, internetPenetration: 85 },
  { country: 'Croatia', revenuePerCapita: 36.9, gdpPerCapita: 14200, internetPenetration: 82 },
];

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

const GlobalMarkets = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">Regional Revenue Distribution</CardTitle>
          <CardDescription>Performance across global markets with growth trajectories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="region" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'revenue' ? `$${value}B` : `${value}%`,
                  name === 'revenue' ? 'Revenue' : 'Growth Rate'
                ]}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Market Penetration vs GDP</CardTitle>
          <CardDescription>Emerging market efficiency analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <ScatterChart data={emergingMarkets}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                dataKey="gdpPerCapita" 
                name="GDP per Capita" 
                stroke="#64748b"
                tickFormatter={(value) => `$${value/1000}K`}
              />
              <YAxis 
                type="number" 
                dataKey="revenuePerCapita" 
                name="Revenue per Capita" 
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'gdpPerCapita' ? `$${value}` : `$${value}`,
                  name === 'gdpPerCapita' ? 'GDP per Capita' : 'Revenue per Capita'
                ]}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return payload[0].payload.country;
                  }
                  return '';
                }}
              />
              <Scatter dataKey="revenuePerCapita" fill="#8b5cf6" />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Geographic Distribution</CardTitle>
          <CardDescription>Revenue share by global regions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={regionalData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="revenue"
              >
                {regionalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value) => [`$${value}B`, 'Revenue']}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {regionalData.map((item, index) => (
              <div key={item.region} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-slate-600">{item.region}</span>
                </div>
                <span className="font-medium">${item.revenue}B</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalMarkets;
