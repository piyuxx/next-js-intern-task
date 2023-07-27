import BlobWithText from "@/components/BlobWithText";
import "@/style/features.css"
import BenifitsListCard from "./BenifitsListCard";
function FeaturesSection() {
  return (
    <>
        <h2 className="feature-heading">
        Boost the speed of your development and test cycles.
        </h2>
        <p className="feature-subheading">
        With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.

        </p>
        <div className="card-1">
        <BenifitsListCard title1={"CI/CD Pipeline Generate"} title2={"Build / Deploymnent"}/>
        </div>
        <BlobWithText/>
        <div className="card-2">
        <BenifitsListCard title1={"Generate Test Cases"} title2={"Code Analysis"}/>
        </div>
    </>
  )
}

export default FeaturesSection