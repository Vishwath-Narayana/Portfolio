import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="mb-12">
      <div className="w-28 h-28 rounded-xl mx-auto mb-4 overflow-hidden">
        <img
          src={heroImage}
          alt="Profile"
          className="w-full h-full object-cover object-top scale-[1.5] origin-[50%_80%]"
        />
      </div>
      <h1 className="text-3xl font-semibold text-center mt-4">Vishwath T</h1>
      <p className="text-muted text-center mt-1">Full Stack Developer | Student</p>
    </section>
  );
}
