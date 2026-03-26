import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="mb-12">
      <div className="w-28 h-28 rounded-xl mx-auto mb-4 overflow-hidden">
        <img
          src={heroImage}
          alt="Profile"
          className="w-full h-full object-cover scale-[2] origin-[50%_65%]"
        />
      </div>
      <h1 className="text-3xl font-semibold text-center mt-4">Vishwath Narayana</h1>
      <p className="text-muted text-center mt-1">Full Stack Developer | Student</p>
    </section>
  );
}
