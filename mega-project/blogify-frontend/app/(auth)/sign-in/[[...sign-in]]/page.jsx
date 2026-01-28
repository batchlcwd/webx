import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignedInPage() {
  return (
    <div className="flex justify-center pt-10">
      <SignIn appearance={"dark"} />
    </div>
  );
}

export default SignedInPage;
