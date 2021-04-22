import Center1 from "../../../Assets/Images/centers/C1.jpg";
import Center2 from "../../../Assets/Images/centers/C2.jpg";
import Center3 from "../../../Assets/Images/centers/C3.jpg";
import Center from "./Center";

const CentersHome = (props) => {
    const centers = [
      {
        id: 1,
        title: "Recovery Center for Psychiatry and Addiction Treatment",
        secondTitle:"​​King Mariout near the North Coast ..",
        description:
          "Recovery is a therapeutic institution,It performs its therapeutic role in the treatment of drug addiction ...",
   
        image: Center1,
        
      },
      {
        id: 2,
        title: "Center for Psychiatry and Addiction Treatment - Bidaya",
        secondTitle:"Villa 116 Lavizon, Bolkly, Awal El Raml, Alexandria",
        description:
          "Our goal is to provide integrated care to our patients according to the latest scientific methods ...",
        image: Center2,
      },
      {
        id: 3,
        title: "My Life Center for Women's Psychiatry",
        secondTitle:"Carrefour after the Grand Mall, Sayed Pasha St., Ring Road, Alexandria",
        description:
          "Care for women and , a special section for the care of elderly women and the elderly ...",
        image: Center3,
      },
    ];
    return (
      <>
      {centers.map((center) => {
            return (
                <div className="mx-4 p-0 col-md-3 col-sm-8 centers-card  " key={center.id}>
                  <Center
                    title={center.title}
                    secondTitle={center.secondTitle}
                    description={center.description}
                    image={center.image}
                  />
                </div>
            );
          })}
      </>
    );
  };
  
  export default CentersHome;