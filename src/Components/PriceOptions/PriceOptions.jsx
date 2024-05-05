import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

    const priceOptions = [ //it is now "option" perameter
          {
            "id": 1,
            "membership_type": "Basic",
            "price": 30,
            "duration": "1 month"
          },
          {
            "id": 2,
            "membership_type": "Standard",
            "price": 50,
            "duration": "1 month"
          },
          {
            "id": 3,
            "membership_type": "Premium",
            "price": 80,
            "duration": "1 month"
          },
          {
            "id": 4,
            "membership_type": "Basic",
            "price": 300,
            "duration": "1 year"
          },
          {
            "id": 5,
            "membership_type": "Standard",
            "price": 500,
            "duration": "1 year"
          },
          {
            "id": 6,
            "membership_type": "Premium",
            "price": 800,
            "duration": "1 year"
          }
        ];

      
    return (
        <div>
            <h1 className="text-2xl">The best Prices in the Town</h1>
            <div className="grid grid-cols-3">
              {
                priceOptions.map(option => <PriceOption key={Option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

// PriceOptions.propTypes = {
    
// };

export default PriceOptions;