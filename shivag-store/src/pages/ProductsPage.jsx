import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useGetProductsQuery } from "@/services/productApi";
import React from "react";
import { NavLink } from "react-router";

function ProductsPage() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return (
      <h1 className="text-3xl flex flex-col justify-center items-center p-10 text-center">
        <Spinner className={"size-8"} />
        <p>Products is loading...</p>
      </h1>
    );
  }
  if (error) {
    return <h1 className="text-3xl p-10 text-center">some went wrong...</h1>;
  }

  return (
    <div className="w-2/3 mx-auto mt-10">
      <h1 className="text-3xl">Products {data.length} is loaded.</h1>
      <div className="products-container mt-5 flex flex-wrap gap-3">
        {data.map((item) => (
          <Card className={`w-[calc(25%-10px)] pt-0`}>
            <img
              className="w-full object-cover h-62.5"
              src={item.images[1]}
              alt=""
            />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className={`flex gap-2 justify-center`}>
              <NavLink to={`/products/${item.id}`}>
                <Button>View</Button>
              </NavLink>
              <Button variant="outline">Add To Card</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
