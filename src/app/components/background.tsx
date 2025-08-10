export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 blur-3xl opacity-60" />
      <div className="absolute top-40 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-indigo-200 to-sky-100 blur-3xl opacity-50" />
    </div>
  );
}
