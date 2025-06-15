
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, Globe, Target, Database, Cpu } from "lucide-react";

const AnalysisContent = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Introduction Section */}
      <Card>
        <CardHeader>
          {/* <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            How Macroeconomic and Demographic Variables Affect Microsoft's Global Revenue
          </CardTitle> */}
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          
          {/* Data Sources Highlight Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <Database className="w-5 h-5 mr-2 text-blue-600" />
              <h4 className="text-lg font-semibold text-blue-900">Data Sources</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">World Bank</div>
                <div className="text-sm text-blue-600">Economic indicators</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">Yahoo Finance</div>
                <div className="text-sm text-blue-600">Financial data</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">IMF</div>
                <div className="text-sm text-blue-600">Global metrics</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">OECD</div>
                <div className="text-sm text-blue-600">Development data</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">Microsoft IR</div>
                <div className="text-sm text-blue-600">Revenue reports</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                <div className="font-medium text-blue-800">Market Statistics</div>
                <div className="text-sm text-blue-600">Tech indicators</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Introduction</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Microsoft Corporation is a global technology leader with ~$211 billion in annual revenue. The company 
            operates in over 190 countries and employs more than 220,000 people worldwide, reflecting an 
            expansive international footprint. Its diverse product portfolio spans personal computing and cloud 
            services, including the Windows operating system, Azure cloud platform, Office productivity suite, Dynamics 
            business applications, Surface devices, and the new AI-powered Copilot assistants. The central question of 
            this analysis is: How do macroeconomic and demographic variables affect Microsoft's global revenue?
          </p>
          <p className="text-slate-700 leading-relaxed">
            To explore this, we integrated data from reputable sources such as the World Bank, Yahoo Finance, International Monetary 
            Fund (IMF), OECD, and Microsoft's Investor Relations reports, along with market statistics for 
            demographic and technology indicators. Dozens of potential features were initially considered – from GDP 
            and inflation rates to internet/broadband penetration and education indices – and we narrowed the focus 
            to those most analytically relevant to Microsoft's business (e.g. economic output, price stability, digital 
            infrastructure, population characteristics). This rigorous feature selection ensured the analysis centered on 
            variables with plausible impact on Microsoft's revenue trajectory.
          </p>
        </CardContent>
      </Card>

      {/* Technical Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
            Technical Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
                 
          {/* Technical Terms Highlight Box */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-5 h-5 mr-2 text-emerald-600" />
              <h4 className="text-lg font-semibold text-emerald-900">Key Technical Concepts</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Ridge Regression</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Lasso Regression</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Decision Trees</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Random Forest</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Cross-Validation</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">SHAP Analysis</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">ElasticNet</div>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-100">
                <div className="font-medium text-emerald-800 text-sm">Overfitting</div>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Our approach balanced sophisticated modeling with interpretability. We tested a range of predictive 
            models, including traditional linear regressions (with polynomial terms and regularization like Ridge/Lasso) 
            and machine learning ensembles (decision trees and random forests). Given the limited dataset (annual 
            observations for roughly the past decade), simpler models often outperformed complex ones – an expected 
            outcome when data are scarce. Indeed, a single decision-tree model achieved the best accuracy, with a 
            mean forecasting error of only about $8.5 billion in annual revenue (significantly lower error than any other 
            model).
          </p>
          <p className="text-slate-700 leading-relaxed">
            By contrast, more complex models like random forests tended to overfit or add noise with so 
            few data points, and heavily regularized linear models (Lasso, ElasticNet) underperformed by discarding 
            useful signals. We employed cross-validation to confirm that the decision tree's performance was 
            consistent across different folds of the data, mitigating concerns of overfitting. To extract business insight 
            (not just prediction), we applied SHAP (Shapley Additive Explanations) analysis, which helped interpret the 
            model by quantifying each feature's influence on revenue. This emphasis on interpretability and validation 
            means the findings are both statistically robust and strategically actionable, rather than being a "blackbox" exercise.
          </p>
        </CardContent>
      </Card>

      {/* Insights and Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-purple-600" />
            Insights and Predictions
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-4">
            Model interpretation (SHAP values) highlights the top three factors influencing Microsoft's revenue 
            forecasts. Last year's revenue, revenue as a share of world GDP, and revenue per capita in Georgia emerged 
            as the dominant predictors, collectively accounting for the vast majority of the model's explanatory power. 
            All other variables – including measures of inflation, population, education, and digital adoption – had 
            only marginal effects on the predictions. This confirms that momentum, macroeconomic context, and 
            emerging-market performance are key to understanding Microsoft's revenue trajectory.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            In practical terms, last year's revenue being a top feature indicates strong momentum or baseline continuity in 
            Microsoft's sales (growth tends to carry forward). The company's revenue as a share of world GDP serves 
            as a macroeconomic anchor – essentially capturing how Microsoft's fortunes rise with (and above) overall 
            economic activity. Meanwhile, the prominence of revenue per capita in Georgia – a proxy for 
            performance in an emerging market – provides a signal that pockets of high growth in certain smaller 
            economies can foreshadow broader revenue trends.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Microsoft's revenue growth (indexed to 2018 = 100) far outpaces global GDP and population growth 
            in recent years. Microsoft's revenue nearly doubled since 2018, whereas world GDP 
            grew only ~25% and world population about ~6% in the same period. This indicates Microsoft 
            is capturing a growing share of economic activity – it is not only riding the wave of global growth, but 
            extracting more revenue per capita and per dollar of GDP each year. Microsoft's 
            annual sales climbed from roughly $168 billion in 2021 to over $211 billion in 2023, a gain well above 
            the growth rate of the world economy.
          </p>
        </CardContent>
      </Card>

      {/* Strategy Implications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-orange-600" />
            "What If" Strategy Implications
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-4">
            These findings carry several forward-looking implications for Microsoft's strategic planning. The analysis 
            can serve as a guiding tool for scenario planning, allowing leadership to ask "what if" questions about 
            macroeconomic changes or demographic shifts and anticipate their impact on revenue. In particular, our 
            results suggest:
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-slate-900 mb-2">Invest in high-growth emerging markets:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                The model's identification of Georgia's per-capita revenue as a key feature signals that smaller emerging markets can herald outsized growth. If Microsoft doubles down on regions with rapid GDP-per-capita rises or booming tech adoption, it could capture disproportionate gains. For instance, expanding cloud and consumer services in countries where income levels and internet users are climbing quickly may yield revenue growth well above the global average.
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-slate-900 mb-2">Leverage education and skilling trends:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Markets with improving education indices and tech-savvy workforces present fertile ground for Microsoft's enterprise and developer tools. If a country increases its higher-education enrollment or STEM graduates significantly, we would expect higher uptake of Microsoft's software development platforms, cloud services, and productivity suites in that market.
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-slate-900 mb-2">Track inflation and macro volatility:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                While Microsoft has proven resilient to inflation and GDP swings, sustained high inflation or a severe recession could still dampen customer spending power. Our model indicates only a modest revenue sensitivity to global economic dips, but a "stagflation" scenario (low growth + high inflation) could tighten IT budgets.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-slate-900 mb-2">Prioritize digital infrastructure metrics:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                The strong link between internet penetration and Microsoft's revenue potential means the company should closely watch broadband and cloud infrastructure expansion across markets. Regions rolling out 5G networks, fiber broadband, and data centers effectively lay the groundwork for Microsoft to acquire new customers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900">Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-4">
            This analysis provides a data-driven lens through which Microsoft's leadership can view the 
            interplay between macro trends and the company's financial performance. The predictive model and its 
            interactive dashboard are designed to be modular and updatable – as new quarterly data points arrive or 
            as additional variables (e.g. exchange rates, competitor dynamics, or regional policy changes) become 
            relevant, the model can be refined to maintain accuracy.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Microsoft's strategy and finance teams can use 
            these tools to evaluate international expansion plans, perform macro-economic forecasting for 
            budgeting, or test "what-if" scenarios (such as a surge in a country's internet users or an economic 
            downturn in a region) with relative ease. Importantly, the approach taken here is not Microsoft-specific; it 
            can be replicated for other technology firms seeking to link their corporate outlook with external economic 
            and demographic indicators. By institutionalizing this macro-data perspective, Microsoft can better 
            anticipate shifts in its global revenue drivers and make more informed strategic decisions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisContent;
