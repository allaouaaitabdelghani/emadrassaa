import React, { useState } from 'react';
import { Play, ArrowLeft, ArrowRight, Send } from 'lucide-react';

function MyCourse() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex-1 overflow-y-auto">
      <main className="p-6">
        <h1 className="text-2xl font-bold text-[#002b4d]">Hello Hicham, welcome back to your English course!</h1>
        <h2 className="text-lg text-gray-700 mt-2">English course Part one : Introduction</h2>

        {/* Video Section */}
        <div className="mt-6 bg-gray-200 rounded-xl flex items-center justify-center min-h-[300px] relative">
          <button className="h-16 w-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
            <Play className="text-white h-6 w-6" />
          </button>
        </div>

        {/* Instructor & Description */}
        <div className="mt-8 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src="/api/placeholder/100/100" 
              alt="Henry Barthes" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Henry Barthes</h3>
            <p className="text-sm text-gray-600">A seasoned professional educator</p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Description</h4>
              <p className="text-sm text-gray-700 mt-1">
                Explore social issues such as indifference, depression, and the challenges faced by both students and teachers in a neglected educational system.
              </p>
            </div>
          </div>
        </div>

        {/* Course Roadmap Cards */}
        <div className="mt-10 border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-lg font-semibold text-[#002b4d] mb-4">Complete the course</h3>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="min-w-[280px] rounded-lg shadow-sm border overflow-hidden">
                  <div className="h-32 bg-blue-100 relative">
                    <img 
                      src="/api/placeholder/300/150" 
                      alt="Big Ben with UK flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#002b4d] text-white p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">English01</h4>
                        <p className="text-sm">Part two</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
                        <img 
                          src="/api/placeholder/32/32" 
                          alt="Henry Barthes"
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <p className="text-sm mt-2">Course roadmap</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#002b4d] text-white rounded-full flex items-center justify-center shadow">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#002b4d] text-white rounded-full flex items-center justify-center shadow">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="mt-10">
          <h3 className="text-gray-700 font-medium">Anything to say?</h3>
          <div className="relative mt-2">
            <textarea
              className="w-full border rounded-lg p-4 min-h-[100px]"
              placeholder="Give us feedback about the course"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="absolute bottom-4 right-4 bg-[#002b4d] text-white p-2 rounded-full shadow"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCourse;