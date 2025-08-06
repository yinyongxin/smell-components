import { cn } from "@src/utils"
import { useLayoutEffect, useEffect, useRef, useState } from "preact/hooks"

const TopNavBar = () => {
  const navList = [
    {
      label: 'UI组件',
      path: '/ui-components'
    },
    {
      label: '小组件',
      path: '/smell-components'
    },
    {
      label: '测试',
      path: '/test-pages'
    },
  ]

  const [active, setActive] = useState(0)
  const ref = useRef<HTMLUListElement>(null)
  const checkRef = useRef<HTMLDivElement>(null)

  const setPosition =(index: number) => {
    if (!checkRef.current || !ref.current) {
      return
    }
    const child = ref.current.children[index]
    const left = [...ref.current.children].filter((fItem, fIndex) => {
      return fIndex < index
    }).map(mItem => {
      return mItem.clientWidth + 8
    }).reduce((a, b) => a + b, 0)
    checkRef.current.style.width = child.clientWidth + 'px'
    checkRef.current.style.height = child.clientHeight + 'px'
    checkRef.current.style.left = left + 8 + 'px'
  }

  useLayoutEffect(() => {
    setPosition(0)
  }, [])

  return (
    <nav className="flex justify-center">
      <div className="relative bg-white/80 backdrop-blur rounded-full shadow">
        <div ref={checkRef} className="absolute top-2 bottom-2 left-2 transition-all">
          <div className="size-full bg-gray-100 backdrop-blur rounded-full"></div>
        </div>
        <ul className="relative p-2 flex gap-2 " ref={ref} onMouseLeave={() => {
         setPosition(active)
        }}>
          {navList.map((item, index) => {
            return (
              <li
                class={cn("h-10 px-4 flex justify-center items-center cursor-pointer", {
                  'font-bold': active === index
                })}
                onMouseEnter={() => {
                  setPosition(index)
                }}
                onClick={() => {
                  setActive(index)
                }}
              >
                {item.label}
              </li>
            )
          })}
        </ul>

      </div>
    </nav>
  )
}

export default TopNavBar