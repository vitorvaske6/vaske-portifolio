import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../styles/Bootstrap.module.css";
import Image from "next/image";
import { ProjectFeature } from "./content/Projects";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {
  items: ProjectFeature[]
}

export default function BootstrapCarousel({items} : Props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.key}>
          <Image className="w-full h-full" src={item.cover} alt="slides" width={1920} height={1080} />
          <h3 className="absolute left-0 top-0 bg-black bg-opacity-25 p-4 rounded-br-lg ">{item.label}</h3>
          <p className="absolute bottom-4 bg-black bg-opacity-25">{item.description}</p>
        </div>
      ))}
    </Carousel>
  );
}


{/* <Carousel activeIndex={index} onSelect={handleSelect}>
{items.map((item) => (
  <Carousel.Item key={item.key} className={''} interval={4000}>
    <Image src={item.cover} alt="slides" width={200} height={200} />
    <Carousel.Caption className={''}>
      <h3>{item.label}</h3>
      <p>{item.description}</p>
      <button className="btn btn-danger">Visit Docs</button>
    </Carousel.Caption>
  </Carousel.Item>
))}
</Carousel> */}