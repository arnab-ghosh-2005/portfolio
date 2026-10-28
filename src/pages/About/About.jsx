import ProfileImg from "@/assets/images/arnab.jpg";
import { Trophy, Sparkles } from "lucide-react";
import { profile, achievements } from "@/data/portfolio";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Analyst, ML Builder, Designer, Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={ProfileImg}
                  className="rounded-[15px] shadow block w-full aspect-square object-cover"
                  alt={`${profile.name} portrait`}
                  width={1080}
                  height={1080}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I&apos;m {profile.name}, a final-year B.Tech student in
                Computer Science and Business Systems with hands-on experience
                in{" "}
                <span className="font-bold text-white">
                  data analysis, customer analytics and business intelligence
                </span>
                .
              </p>
              <p className="text-white">
                I build end-to-end projects covering cohort and retention
                analysis, RFM segmentation, probabilistic CLV forecasting,
                marketing ROI analysis and Power BI churn dashboards, backed by
                a strong foundation in Python, SQL, Excel and Power BI. I like
                turning raw data into clear, actionable business insights.
              </p>
              <p className="text-white">
                Beyond analytics, I work with machine learning and deep learning
                (NLP, recommendation systems, Bi-GRU/LSTM models), design clean
                dashboard and app interfaces, and I&apos;m currently learning
                GenAI and Agentic AI.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <div className="space-y-4">
                    {achievements.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <Trophy className="w-5 h-5 mt-0.5 text-yellow-400 shrink-0" />
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 mt-0.5 text-teal-400 shrink-0" />
                      <p className="font-medium text-white">
                        Currently exploring GenAI &amp; Agentic AI
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
