import React, { useState } from 'react';
import { FaCalculator, FaChartLine, FaBullseye } from 'react-icons/fa';

const App = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const [currentWeight, setCurrentWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(0);
  const [benchPress, setBenchPress] = useState({ current: 0, target: 0 });
  const [squat, setSquat] = useState({ current: 0, target: 0 });
  const [deadlift, setDeadlift] = useState({ current: 0, target: 0 });

    const calculateBMR = () => {
    let bmrCalc;
    if (gender === 'male') {
      bmrCalc = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmrCalc = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    setBmr(bmrCalc);

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };
    setTdee(bmrCalc * activityMultipliers[activityLevel]);
  };


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-center">
          <FaBullseye className="text-2xl text-blue-600 mr-2" />
          <h1 className="text-2xl font-semibold">Fitness Goal Tracker</h1>
        </div>
      </header>

      <div className="container mx-auto mt-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium ${
              activeTab === 'calculator' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('calculator')}
          >
            <FaCalculator className="inline-block mr-2" />
            Calculator
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium ${
              activeTab === 'progress' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('progress')}
          >
            <FaChartLine className="inline-block mr-2" />
            Progress
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium ${
              activeTab === 'goals' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('goals')}
          >
            <FaBullseye className="inline-block mr-2" />
            Goals
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'calculator' && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Weight (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Height (cm)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter height"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}

                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Activity Level</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light Activity</option>
                  <option value="moderate">Moderate Activity</option>
                  <option value="veryActive">Very Active</option>
                  <option value="extraActive">Extra Active</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Goal</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="maintain">Maintain Weight</option>
                  <option value="lose">Lose Weight</option>
                  <option value="gain">Gain Weight</option>
                </select>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={calculateBMR}
              >
                Calculate
              </button>
                {bmr > 0 && (
                <div className='mt-4'>
                    <p>BMR: {bmr.toFixed(2)} calories</p>
                    <p>TDEE: {tdee.toFixed(2)} calories</p>
                </div>
                )}
            </div>
          )}

          {activeTab === 'progress' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Weight Goal</h2>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Current: {currentWeight} kg</span>
                  <div className="relative pt-1 w-full">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(currentWeight / targetWeight) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <span className="text-gray-700 ml-2">Target: {targetWeight} kg</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Strength Goals</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Bench Press: {benchPress.current}kg -> {benchPress.target}kg</h3>
                  <div className="relative pt-1 w-full">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(benchPress.current / benchPress.target) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium">Squat: {squat.current}kg -> {squat.target}kg</h3>
                  <div className="relative pt-1 w-full">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(squat.current / squat.target) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Deadlift: {deadlift.current}kg -> {deadlift.target}kg</h3>
                  <div className="relative pt-1 w-full">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(deadlift.current / deadlift.target) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'goals' && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Target Weight (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Current Weight (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bench Press Target (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={benchPress.target}
                  onChange={(e) => setBenchPress({...benchPress, target: parseFloat(e.target.value)})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Current Bench Press (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={benchPress.current}
                  onChange={(e) => setBenchPress({...benchPress, current: parseFloat(e.target.value)})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Squat Target (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={squat.target}
                  onChange={(e) => setSquat({...squat, target: parseFloat(e.target.value)})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Current Squat (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={squat.current}
                  onChange={(e) => setSquat({...squat, current: parseFloat(e.target.value)})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Deadlift Target (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={deadlift.target}
                  onChange={(e) => setDeadlift({...deadlift, target: parseFloat(e.target.value)})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Current Deadlift (kg)</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter target weight"
                  value={deadlift.current}
                  onChange={(e) => setDeadlift({...deadlift, current: parseFloat(e.target.value)})}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
