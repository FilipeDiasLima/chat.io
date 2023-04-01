import { MessageBox } from "./MessageBox";
import { Scrollbar } from "./Scrollbar";
import { WriteMessage } from "./WriteMessage";

export function ChatField() {
  const marginLeft = "ml-[300px]";
  return (
    <div
      className={`
      flex 
      w-3/6
      ml-[540px]
      max-[1124px]:ml-[420px]
      max-[800px]:ml-0
      max-[800px]:w-full
      max-[800px]:px-2
      py-44
      `}
    >
      <Scrollbar />
      <ul
        className="
        flex 
        flex-col-reverse
        items-center 
        w-full 
        "
      >
        {Array.from(Array(10)).map((item, index) => (
          <MessageBox index={index} mine={index % 3 === 0} />
        ))}
      </ul>

      <WriteMessage />
    </div>
  );
}
