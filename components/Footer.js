import Link from 'next/link'

const Title = (props) => {
  return (
    <footer className="text-center text-xs">
      <Link href="https://github.com/masdzub/">
        <a className="text-gray-400 dark:text-gray-700">
          <small>github.com/masdzub/</small>
        </a>
      </Link>
    </footer>
  )
}

export default Title
