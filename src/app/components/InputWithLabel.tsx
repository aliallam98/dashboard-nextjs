interface IProps {
  name: string;
  label: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputWithLabel = ({ type, name, label, onChange, value }: IProps) => {
  return (
    <div className="relative flex flex-col">
      <label
        htmlFor={name}
        className={`
                    text-neutral-600
                    absolute
                    top-0
                    border-x-8
                    border-white
                    bg-white
                    left-6
                    origin-[0]
                    scale
                    -translate-y-3
                  `}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder=" "
        className={`
                    block
                    w-full
                    pt-3
                    pb-1
                    px-3
                    text-xl
                    border border-neutral-200
                    focus:outline-none
                    focus:ring-0
        `}
      />
    </div>
  );
};

export default InputWithLabel;
