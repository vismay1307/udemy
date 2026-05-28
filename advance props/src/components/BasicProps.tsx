import { useState } from "react"
type ButtonProps = {
  text: string
  color: "primary" | "secondary" | "danger" | "success"
  size?: "small" | "large"
  onClick: () => void
  disabled?: boolean
}
function Button({
  text,
  color,
  size,
  onClick,
  disabled = false
}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl font-semibold shadow-md transition-all duration-300

        hover:scale-105 active:scale-95

        ${size === 'small' ? 'text-sm px-4 py-2' : ''}
        ${size === 'large' ? 'text-lg px-8 py-4' : ''}
        ${!size ? 'text-base px-6 py-3' : ''}

        ${color === 'primary'
          ? 'bg-blue-500 hover:bg-blue-600 text-white'
          : ''}

        ${color === 'secondary'
          ? 'bg-gray-500 hover:bg-gray-600 text-white'
          : ''}

        ${color === 'danger'
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : ''}

        ${color === 'success'
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : ''}

        ${disabled
          ? 'opacity-50 cursor-not-allowed hover:scale-100'
          : 'cursor-pointer'}
      `}
    >
      {text}
    </button>
  )
}

const BasicProps = () => {

  const [clickCount, setClickCount] = useState(0)

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="mb-3 text-4xl font-extrabold text-gray-800">
          Basic Props
        </h2>

        <p className="text-lg leading-8 text-gray-600">
          Learn how props work in React using reusable button
          components with different colors, sizes and disabled states.
        </p>
      </div>

      {/* Counter */}
      <div className="mb-10 rounded-2xl bg-black p-5 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-white">
          Total Click Count :
          <span className="ml-3 text-yellow-400">
            {clickCount}
          </span>
        </h3>
      </div>

      {/* Colors Section */}
      <div className="mb-10 rounded-2xl bg-slate-50 p-6 shadow-md">

        <h3 className="mb-5 text-2xl font-bold text-gray-800">
          Different Colors
        </h3>

        <div className="flex flex-wrap gap-4">

          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />

        </div>
      </div>

      {/* Sizes Section */}
      <div className="mb-10 rounded-2xl bg-slate-50 p-6 shadow-md">

        <h3 className="mb-5 text-2xl font-bold text-gray-800">
          Different Sizes
        </h3>

        <div className="flex flex-wrap items-center gap-4">

          <Button
            text="Small Button"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Default Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Large Button"
            color="danger"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />

        </div>
      </div>

      {/* Disabled Section */}
      <div className="rounded-2xl bg-slate-50 p-6 shadow-md">

        <h3 className="mb-5 text-2xl font-bold text-gray-800">
          Disabled State
        </h3>

        <div className="flex flex-wrap gap-4">

          <Button
            text="Enabled Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Disabled Button"
            color="danger"
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />

        </div>

      </div>

    </section>
  )
}

export default BasicProps