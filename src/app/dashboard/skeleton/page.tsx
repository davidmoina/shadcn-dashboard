import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const array = Array.from({ length: 9 }).map((_, index) => index);

  return array;
};

export default async function SkeletonPage() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item} className="w-full">
          <CardHeader className="flex flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt=""
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />

            <div>
              <CardTitle>Shadcn</CardTitle>
              <CardDescription>@shadcn</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Follow</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
