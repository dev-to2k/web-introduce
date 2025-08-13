export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute top-[-6vh] left-[-10vw] w-[70vw] h-[70vw] max-w-none rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 blur-3xl opacity-60 dark:hidden" />
      <div className="absolute top-[22vh] right-[-8vw] w-[60vw] h-[60vw] max-w-none rounded-full bg-gradient-to-br from-indigo-200 to-sky-100 blur-3xl opacity-50 dark:hidden" />
    </div>
  );
}
