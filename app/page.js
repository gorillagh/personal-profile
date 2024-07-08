import BackToTop from "./components/backToTop";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Hero />
      <div className="mx-auto md:w-4/5">
        <Profile />
      </div>
      <BackToTop />
    </main>
  );
}
