interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="lg:gap-0 gap-8 w-full h-full flex flex-wrap justify-between">
      {children}
    </div>
  )
}