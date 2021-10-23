import { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme } from '../Theme'
import { ThemeProvider } from 'styled-components'

const Provider = ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const body =
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

export default Provider