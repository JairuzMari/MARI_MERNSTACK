import React from 'react';

export default function StudentCard({ name, age, bday, studname, course }) {
    return (
        <div className="max-w-sm mx-auto my-12 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-sans text-slate-300">
            {/* Sleek Dark Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

            <div className="p-6">
                <h2 className="text-lg font-bold text-slate-100 tracking-wide uppercase border-b border-slate-800 pb-3 mb-4">
                    Student Identification
                </h2>

                <div className="space-y-4">
                    {/* First Name Field */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">First Name:</span>
                        <span className="text-slate-200 font-semibold">{name || "N/A"}</span>
                    </div>

                    {/* Nickname/Student Name Field (Fixes the missing Chillz!) */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Nickname:</span>
                        <span className="text-indigo-400 font-semibold">{studname || "N/A"}</span>
                    </div>

                    {/* Age Field */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Age:</span>
                        <span className="text-slate-200 font-semibold">{age ? `${age} yrs old` : "N/A"}</span>
                    </div>

                    {/* Birthday Field */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Birthday:</span>
                        <span className="text-slate-200 font-semibold">{bday || "N/A"}</span>
                    </div>

                    {/* Course Badge Field */}
                    <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-800">
                        <span className="text-slate-500 font-medium">Course:</span>
                        <span className="bg-indigo-950/50 text-indigo-400 border border-indigo-900/50 px-3 py-0.5 rounded-md text-xs font-bold tracking-wider">
                            {course || "N/A"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
