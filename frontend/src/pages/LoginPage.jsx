import LoginForm from '../components/LoginForm';
import treeSilhouette from '../assets/treeImage.png';

// render login page with form
const LoginPage = () => {
  return (
    <>
      {/* header */}
      <header className="absolute top-4 left-4 z-10">
        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl text-[#3E3E3E] font-[Spectral]">
          READING APP
        </h1>
      </header>

      {/* form */}
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-[#F5F5F5] to-[#DAD7CD] relative overflow-hidden">
        <section className="w-full max-w-md bg-white shadow-md rounded-xl p-8 z-10">
          <LoginForm/>
        </section>
      </main>

      {/* tree images */}
      <img
        src={treeSilhouette}
        alt="Tree Silhouette"
        className="absolute bottom-25 left-20 w-100 h-auto z-2 opacity-80"
      />

      <img
        src={treeSilhouette}
        alt="Tree Silhouette"
        className="absolute bottom-25 right-40 w-100 h-auto z-2 opacity-80"
      />

      {/* sun */}
      <div className="absolute top-10 right-30 w-50 h-50 bg-[#C32F27] rounded-full z-0 opacity-90"></div>

      {/* grass */}
      <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[1000px] -mb-1"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="blurFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
            </filter>
          </defs>

          <path
            fill="#A8CABA"
            filter="url(#blurFilter)"
            d="M0,320 C360,200 1080,400 1440,280 L1440,400 L0,400 Z"
          />
        </svg>
      </div>
    </>
  );
};

export default LoginPage;