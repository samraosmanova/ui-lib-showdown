import { useState } from "react";
import RadixApp from "./RadixApp";
import ChakraApp from "./ChakraApp";

export default function App() {
 const [library, setLibrary] = useState<"radix" | "chakra" | null>(null)

 if(!library) return <div className="root-buttons">
  <div className="button-77" onClick={()=>{setLibrary("radix")}} >Radix UI</div>
  <div className="button-77" onClick={()=>{setLibrary("chakra")}}>Chakra UI</div>
 </div>

 return library === "radix" ? <RadixApp /> : <ChakraApp />
}
