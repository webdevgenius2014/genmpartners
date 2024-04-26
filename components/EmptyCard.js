// components/Card.js
export default function Card({ title, /* ...other props... */ }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 pt-[50px]">{title}</h2>

        
      </div>
    )
  }
  