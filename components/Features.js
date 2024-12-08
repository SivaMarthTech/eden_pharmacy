// components/Features.js
const Features = () => {
    return (
      <section className="flex flex-col md:flex-row justify-around my-8">
        <div className="flex flex-col items-center text-center p-4">
          <h3 className="text-xl font-bold text-darkBlue">Vitamins</h3>
          <p className="text-gray-700">Increased Vitamins and minerals in your diet</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <h3 className="text-xl font-bold text-darkBlue">Weight Loss</h3>
          <p className="text-gray-700">Find scientifically proven solutions</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <h3 className="text-xl font-bold text-darkBlue">Functional Foods</h3>
          <p className="text-gray-700">From protein powders to baby formula</p>
        </div>
      </section>
    );
  };
  
  export default Features;
  