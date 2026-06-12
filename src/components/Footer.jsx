import { personal } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <span className="text-xs text-muted">© {year} {personal.name}</span>
        <span className="text-xs text-muted">React · Vite · Tailwind CSS</span>
      </div>
    </footer>
  );
}