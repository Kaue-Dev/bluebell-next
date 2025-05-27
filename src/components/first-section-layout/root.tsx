interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="lg:h-screen h-auto lg:flex-row flex-col flex items-start justify-center w-full max-h-[1000px] gap-8">
      {children}
    </div>
  );
};
