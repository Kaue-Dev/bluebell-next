interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="lg:flex-row flex-col lg:p-16 p-4 flex items-center justify-center w-full gap-8 mt-8 bg-slate-200 rounded-4xl">
      {children}
    </div>
  );
};
