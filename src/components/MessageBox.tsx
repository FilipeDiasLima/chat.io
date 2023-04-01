type Props = {
  index: number;
  mine?: boolean;
};

export function MessageBox({ index, mine = false }: Props) {
  return (
    <li
      className={`flex ${
        mine ? "flex-row-reverse self-end" : "flex-row self-start"
      } my-1`}
    >
      <img
        className="w-14 h-14 rounded-2xl "
        src="https://github.com/filipediaslima.png"
        alt=""
      />
      <p
        className={`
          ${mine ? "mr-4" : "ml-4"} 
          max-w-xl
          ${mine ? "bg-transparent" : "bg-blue-secondary"}
          ${mine ? "border border-gray-300 dark:border-gray-500" : ""}
          max-[1440px]:max-w-md 
          max-[1280px]:max-w-sm 
          max-[1024px]:max-w-xs 
          max-[800px]:max-w-sm 
          max-[600px]:max-w-xs 
          p-4 
          rounded-3xl 
          ${mine ? "text-purple dark:text-gray-200" : "text-white"} 
          font-light 
          text-sm
        `}
      >
        {index} - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatem exercitationem f
      </p>
    </li>
  );
}
