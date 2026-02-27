import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.email("Invalid email"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
});

function slowCalculation(num) {
  console.log("Running slow calculation...");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}

function Counter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [buttonValue, setButtonValue] = useState("Click me");
  const [count, setCount] = useState(0);
  console.log("counter[parent rendered]");

  const result = useMemo(() => slowCalculation(count), [count]);

  const handleButtonClicked = useCallback(() => {
    console.log("button click in parent from child");
  }, []);

  function handleFormSubmit(formValue) {
    console.log(formValue);
    console.log("form submitted");
    console.log(formState.errors);
  }

  return (
    <div>
      {/* creating forms */}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          placeholder="Enter email here"
          {...register("email", {
            required: true,
          })}
        />

        <p>{errors.email?.message}</p>

        <input placeholder="Enter name here" {...register("name")} />
        <p>{errors.name?.message}</p>
        <button type="submit">Submit</button>
      </form>

      <h1>{count}</h1>
      <h1>{result}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change Count
      </button>
      <button onClick={() => setButtonValue("Changed")}>
        Change Button Value
      </button>

      <Button handleButtonClicked={handleButtonClicked} value={buttonValue} />
    </div>
  );
}

export default Counter;
