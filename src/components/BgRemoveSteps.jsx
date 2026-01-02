import React from 'react';

const steps = [
  {
    id: 'Step-1',
    title: "Select an Image",
    description: "First choose any JPG, PNG, or WebP image you want to remove background. We support all image diemsions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    )
  },
  {
    id: 'Step-2',
    title: "Let magic remove the background",
    description: "Our tool automatically removes the background from your image.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'Step-3',
    title: "Download your Image",
    description: "Get your transparent image instantly. Ready for use in design, e-commerce, or personal projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
];

const BgRemoveStep = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 pt-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm  block">
            Simple Process
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-3 tracking-tight">
            How to Remove Backgrounds
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Professional transparency in three simple steps.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col h-full">
              {/* Card Container */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col items-start relative overflow-hidden">
                
                {/* Gradient Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-slate-900 via-blue-800 to-blue-600"></div>
                
                {/* Large Background Number */}
                <span className="absolute right-6 top-6 text-[3rem] font-black text-slate-300 select-none pointer-events-none z-0 leading-none tracking-tighter">
                  {step.id}
                </span>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-blue-100">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BgRemoveStep;