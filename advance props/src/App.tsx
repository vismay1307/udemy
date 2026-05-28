import './App.css'
import AppContent from '../src/ui/AppContent.tsx'

const Navigation = ({ isDark }: { isDark: boolean }) => {

  const sections = [
    {
      id: "basic", label: "Basic Props"
    },
    {
      id: "children", label: "Children Props"
    },
    {
      id: "complex", label: "Complex Props"
    },
    {
      id: "ref", label: "Ref Props"
    },
    {
      id: "theme", label: "Theme Props"
    },
  ]

  return (
    <nav className="sticky top-0 z-50 mb-10">
      <div
        className={`
          flex flex-wrap items-center justify-center gap-4 rounded-2xl p-5 shadow-2xl backdrop-blur-md border
          
          ${isDark
            ? "bg-black/80 border-orange-500"
            : "bg-white border-pink-400"
          }
        `}
      >

        {sections.map((sec) => (
          <button
            key={sec.id}
            className={`
              rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300

              ${isDark
                ? "bg-zinc-900 text-white hover:bg-orange-500 hover:text-black"
                : "bg-pink-100 text-black hover:bg-pink-500 hover:text-white"
              }
            `}
          >
            {sec.label}
          </button>
        ))}

      </div>
    </nav>
  )
}

function App() {

  const isDark = true

  return (
    <div
      className={`
        min-h-screen px-6 py-10 transition-all duration-500

        ${isDark
          ? "bg-black text-white"
          : "bg-white text-black"
        }
      `}
    >

      <div className="mb-8 flex justify-end">
        <button
          className={`
            rounded-xl px-5 py-3 font-bold shadow-lg

            ${isDark
              ? "bg-orange-500 text-black"
              : "bg-pink-500 text-white"
            }
          `}
        >
          {isDark ? "Dark Theme" : "Light Theme"}
        </button>
      </div>

      <h1
        className={`
          mb-10 text-center text-5xl font-extrabold tracking-wide

          ${isDark
            ? "text-orange-400"
            : "text-pink-500"
          }
        `}
      >
        Advance Props
      </h1>

      <AppContent
        navigation={<Navigation isDark={isDark} />}
        isDark={isDark}
      />

    </div>
  )
}

export default App