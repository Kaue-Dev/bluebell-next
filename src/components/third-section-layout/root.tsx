interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-8 mt-36">
      {children}
    </div>
  );
};
