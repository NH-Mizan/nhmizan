import {
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

const programmingIcons = [
  { Icon: Code2, className: "programming-icon--one" },
  { Icon: Terminal, className: "programming-icon--two" },
  { Icon: Database, className: "programming-icon--three" },
  { Icon: Braces, className: "programming-icon--four" },
  { Icon: GitBranch, className: "programming-icon--five" },
  { Icon: Server, className: "programming-icon--six" },
  { Icon: Cpu, className: "programming-icon--seven" },
  { Icon: FileCode2, className: "programming-icon--eight" },
  { Icon: Globe2, className: "programming-icon--nine" },
  { Icon: Workflow, className: "programming-icon--ten" },
];

export default function ProgrammingBackground() {
  return (
    <div className="programming-background" aria-hidden="true">
      {programmingIcons.map(({ Icon, className }) => (
        <div key={className} className={`programming-icon ${className}`}>
          <Icon aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}
