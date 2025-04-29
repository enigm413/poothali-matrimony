import { stepList } from "../assets/data";
import Step from "./Step";

export default function StepList() {
  return (
    <ul className="wrapper step-list-wrapper">
      {stepList.map((step) => {
        const { id, ...props } = step;
        return <Step key={id} {...props} />;
      })}
    </ul>
  );
}
