type ChatCardProps = {
  isSelected?: boolean;
};

export function ChatCard({ isSelected = false }: ChatCardProps) {
  return (
    <div
      className={`
        flex 
        flex-row 
        w-full 
        rounded-3xl
        bg-${isSelected ? "yellow-light" : "transparent"}
        p-3 
        items-center 
        justify-between 
        hover:cursor-pointer 
        hover:bg-yellow-light-hover
        transition ease-out duration-200
      `}
    >
      <div className="flex flex-row space-x-2 item-center max-w-[180px] max-[1140px]:max-w-[120px]">
        <img
          className="rounded-2xl w-14 h-14"
          src="https://github.com/filipediaslima.png"
          alt="Filipe Dias"
        />
        <div className="flex flex-col w-full justify-evenly">
          <strong className="text-purple dark:text-blue-secondary">
            Filipe Dias
          </strong>
          <span
            className="
              w-full 
              text-sm
              text-light-purple
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
              "
          >
            Eu fui naquele restaurante que você me indicou.
          </span>
        </div>
      </div>
      <p className="text-light-purple text-sm">24m</p>
    </div>
  );
}
