interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="lg:flex-row flex-col w-full h-full flex flex-col gap-8">
      {children}
    </div>
  )
}