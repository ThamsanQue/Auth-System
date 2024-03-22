interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center from-primary to-secondary bg-gradient-to-b">
      {children}
    </div>
  );
};

export default ProtectedLayout;
