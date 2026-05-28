import BasicProps from "../components/BasicProps"

type AppContentProps = {
  navigation: React.ReactNode
  isDark: boolean
}

const AppContent = ({ navigation, isDark }: AppContentProps) => {
  return (
    <div
      className={`
        mx-auto max-w-5xl rounded-3xl border p-8 shadow-2xl transition-all duration-500

        ${isDark
          ? "border-orange-500 bg-zinc-950"
          : "border-pink-400 bg-white"
        }
      `}
    >

      {navigation}

      <div
        className={`
          mt-8 rounded-2xl p-10 text-center

          ${isDark
            ? "bg-zinc-900"
            : "bg-pink-50"
          }
        `}
      >

        <h2
          className={`
            mb-4 text-3xl font-bold

            ${isDark
              ? "text-orange-400"
              : "text-pink-500"
            }
          `}
        >
          App Content
        </h2>

        <p
          className={`
            text-lg leading-8

            ${isDark
              ? "text-zinc-300"
              : "text-gray-700"
            }
          `}
        >
          This section contains all advanced props examples like
          children props, refs, theme props and complex props.
        </p>
        <BasicProps/>
      </div>

    </div>
  )
}

export default AppContent