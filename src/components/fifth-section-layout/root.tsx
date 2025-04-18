interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex items-center justify-center w-full gap-8 mt-8 bg-slate-200 rounded-4xl p-16">
      {children}
    </div>
  );
};
