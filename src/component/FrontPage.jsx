import moon from '../assets/ay.png';
import shiva from '../assets/shiva.png'
import backgroundImage from '../assets/bg.jpg';

export default function FrontPage() {
  return (
    <div>
      <div
       className="flex justify-center items-center h-screen"
       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}
       >
        <div
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            width: '500px',
          }}
          className='flex justify-center items-center'
        ><img src={shiva} alt="Site logo" className="p-[7rem]" /></div>
      </div>
    </div>
  );
}
