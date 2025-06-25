import React from 'react';

export default function NextGenReporting() {
  return (
    <div className="min-h-screen bg-black/90 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
          Next Gen Reporting Tool
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          The Next Gen Reporting Tool empowers users to generate custom reports from natural language prompts, seamlessly converting NL to SQL using your choice of LLM, and executing queries directly on Oracle EBS HR schema data. Results are displayed instantly, with options to save, schedule, and burst reports.
        </p>
        <ul className="list-disc list-inside text-gray-200 mb-8 space-y-2">
          <li>Integrated with Oracle EBS (HR schema pre-trained)</li>
          <li>Natural Language to SQL powered by Open API LLM</li>
          <li>Secure login and user profile management</li>
          <li>Save, schedule, and burst reports for future use</li>
          <li>Instant results displayed on screen</li>
        </ul>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Demo Video</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/H5RtGBOCJbM"
              title="Next Gen Reporting Tool Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 mb-8">
            <li>No SQL expertise required – just describe your report in plain English</li>
            <li>Fully integrated with Oracle EBS for real-time insights</li>
            <li>Personalized user experience with login and profile features</li>
            <li>Flexible scheduling and bursting for automated report delivery</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-2">HR Report</h3>
              <img 
                src="/images/reporting-tool/HR Report.png" 
                alt="HR Report" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">HR Report Query</h3>
              <img 
                src="/images/reporting-tool/HR Report Query.png" 
                alt="HR Report Query" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-medium mb-2">HR Report Results</h3>
              <img 
                src="/images/reporting-tool/HR Report Results.png" 
                alt="HR Report Results" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
