interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex items-start justify-center w-full h-screen max-h-[1000px] gap-8">
      {children}
    </div>
  );
};
