import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href={"/documents/123"}>click here</Link>
    </div>
  );
};

export default page;
