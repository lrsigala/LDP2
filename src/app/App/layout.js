import ButtonLink from "@/components/atoms/ButtonLink";
import NavBar from "@/components/organisms/NavBar";

export default function Layout({ children }) {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url('/mainbg.jpeg')` }} >
        <NavBar />
        {children}
    </main>
  );
}
