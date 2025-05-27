interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="lg:mt-36 mt-10 flex flex-col items-start justify-center w-full gap-8">
      {children}
    </div>
  );
};
