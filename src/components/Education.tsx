import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Jawaharlal Nehru Technological University",
    year: "2019 - 2023",
    description: "Specialized in Computer Science with focus on software development, web technologies, and data structures.",
    achievements: [
      "First Class with Distinction",
      "Technical Club Lead",
      "Best Project Award"
    ]
  },
  {
    degree: "Intermediate Education (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2017 - 2019",
    description: "Completed with distinction in Mathematics, Physics, and Chemistry.",
    achievements: [
      "98.7% aggregate",
      "Mathematics Olympiad Winner",
      "Science Club Member"
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-lg text-white transform hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                  <p className="mt-3 text-gray-700">{edu.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-purple-600 mb-2">
                      <Award size={16} />
                      <span className="font-medium">Achievements</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}