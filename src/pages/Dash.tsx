import heroDashboard from "@/assets/hero-dashboard.jpg";

const Dash = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full h-screen">
        <img 
          src={heroDashboard} 
          alt="Supplier Risk Assessment Dashboard" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Dash;