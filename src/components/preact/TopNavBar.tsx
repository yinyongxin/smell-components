const TopNavBar = () => {
  const navList = [
    {
      label: 'UI组件',
      path: '/ui-components'
    },
    {
      label: 'UI组件',
      path: '/ui-components'
    },
    {
      label: 'UI组件',
      path: '/ui-components'
    },
  ]
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-6">
        {navList.map(item => {
          return (
            <li>
              <a href={item.path} class="h-12 px-12 flex justify-center items-center bg-white/50 blur-4 rounded-full">{item.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TopNavBar