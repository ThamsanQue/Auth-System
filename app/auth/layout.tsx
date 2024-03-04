const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center from-primary to-secondary bg-gradient-to-b">
      {children}
    </div>
  );
};

export default AuthLayout;
