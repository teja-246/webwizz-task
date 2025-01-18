import './App.css';
import Question from './Components/Question';

function App() {
  return (
    <div className="bg-[url('/src/assets/bg.png')] min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-x-hidden pb-8">
      <div className='w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10'>
        <img 
          className='h-12 sm:h-16 md:h-20 w-auto object-contain' 
          src="./src/assets/FAQ.png" 
          alt="FAQ" 
        />
      </div>

      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16'>
        <div className='flex flex-col gap-3 sm:gap-4 md:gap-6'>
          <Question qst="HOW DO I OPEN THE NU WEBSITE ON MY DESTOP?" />
          <Question qst="HOW DO I OPEN THE NU WEBSITE ON MY DESTOP?" />
          <Question qst="HOW DO I OPEN THE NU WEBSITE ON MY DESTOP?" />
          <Question qst="HOW DO I OPEN THE NU WEBSITE ON MY DESTOP?" />
          <Question qst="HOW DO I OPEN THE NU WEBSITE ON MY DESTOP?" />
        </div>
      </div>
    </div>
  );
}

export default App;