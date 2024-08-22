import { Button, Card, CardFooter, Image, image } from "@nextui-org/react";

export default function ThreeImage({ imageList }: { imageList: IImage[] }) {
  return (
    <div className="grid grid-cols-3 gap-20">
      {imageList.map((image, index) => (
        <Card key={index} radius="lg" className=" flex flex-col justify-center items-center border-none" shadow="none">
          <Image alt={image.alt} className=" object-cover" height={image.height} src={image.src} width={image.weidht} />
          <CardFooter className={image.fotterClass}>
            <p>{image.text}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
