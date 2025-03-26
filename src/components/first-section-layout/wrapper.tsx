interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-between">
      {children}
    </div>
  )
}