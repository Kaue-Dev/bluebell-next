interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="lg:flex-row flex-col lg:h-screen lg:max-h-[1000px] flex items-start justify-center w-full gap-8">
      {children}
    </div>
  );
};
