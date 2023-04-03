type Props = {
  message: {
    text: string;
    user: string;
  };
  name: string;
};

export function MessageBox({ message, name }: Props) {
  const isSentByMe = name.trim().toLowerCase() === message.user;
  return (
    <li
      className={`flex ${
        isSentByMe ? "flex-row-reverse self-end" : "flex-row self-start"
      } my-1`}
    >
      <img
        className="w-14 h-14 rounded-2xl "
        src="https://github.com/filipediaslima.png"
        alt=""
      />
      <p
        className={`
          ${isSentByMe ? "mr-4" : "ml-4"} 
          max-w-xl
          ${isSentByMe ? "bg-transparent" : "bg-blue-secondary"}
          ${isSentByMe ? "border border-gray-300 dark:border-gray-500" : ""}
          max-[1440px]:max-w-md 
          max-[1280px]:max-w-sm 
          max-[1024px]:max-w-xs 
          max-[800px]:max-w-sm 
          max-[600px]:max-w-xs 
          p-4 
          rounded-3xl 
          ${isSentByMe ? "text-purple dark:text-gray-200" : "text-white"} 
          font-light 
          text-sm
          transition-all duration-200
        `}
      >
        {message.text}
      </p>
    </li>
  );
}
