// components/Card.js
import TPEFGraph from './TPEFGraph';


export default function Card({ title, btcData /* ...other props... */ }) {


    return (
        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
        {/* Chart or content placeholder */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <TPEFGraph data={btcData} />
            
        </div>
        <ul className="mt-4">
          <li className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Supply:</span> 250K</li>
          <li className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">AUM:</span> $10B</li>
          <li className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Carried Interest:</span> 10%</li>
          <li className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Secondary Fees:</span> 2%</li>
          {/* More data points... */}
        </ul>
      </div>
    )
  }
  