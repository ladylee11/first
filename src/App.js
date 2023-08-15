import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='relative'>
      <div className="max-w-md border rounded-2xl absolute left-80 top-20 text-center">
        <div>
          <img src='/qr-code.png' alt='Italian' width={500} height={700}/>
        </div>
        <div>
          <h1 className='font-bold text-4xl'>Improve your font-end skills by building projects</h1>
          <p className='text-2xl'>Scan the QR code to visit Frontend Mentor and take your coding
            skills to the netx level
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
